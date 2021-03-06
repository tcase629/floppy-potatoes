import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';
import Review from './Review';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Column = styled.div`
  backgroud: #fff;
  heigth: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
 padding-left: 50px;
`

const Movie = () => {
  const [movie, setMovie] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] =useState(false)

  const params = useParams()

  useEffect(() => {
    const slug = params.slug
    const url = `/api/movies/${slug}`

    axios.get(url)
    .then(resp => {
      setMovie(resp.data)
      setLoaded(true)
    })
    .catch(resp => console.log(resp))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    setReview({...review, [e.target.name]: e.target.value})

    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const movie_id = movie.data.id
    axios.post('/api/reviews', {review, movie_id})
    .then(resp => {
      const included = [...movie.included, resp.data.data]
      setMovie({...movie, included})
      setReview({title: '', description: '', score: 0})
    })
    .catch(resp => {})
  }

  const setRating = (score, e) => {
    e.preventDefault()

    setReview({...review, score})
  }

  let reviews
  if (loaded && movie.included) {
    reviews = movie.included.map( (item, index) => {
      return (
        <Review 
          key={index}
          attributes={item.attributes}
        />
      )
    })
  }

  return (
    <Wrapper>
      {
        loaded &&
        <Fragment>
          <Column>
            <Main>
                <Header 
                  attributes={movie.data.attributes}
                  reviews={movie.included}
                />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={movie.data.attributes}
              review={review}
              setRating={setRating}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Movie