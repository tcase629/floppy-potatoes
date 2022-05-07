import React from 'react'
import styled from 'styled-components';
import Rating from '../Rating/Rating';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 400px;
    width: 300px;
    border-radius: 15px;
    border: 1px solid rgba(0,0,0,0.1);
  }
`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutOf = styled.div`
  font-size: 18px;
  padding: 10px 0;
  font-weight: 700;
`

const Header = (props) => {
  const { name, image_url, avg_score} = props.attributes
  const total = props.reviews.length

  return (
    <Wrapper>
      <h1> <img src={image_url} alt={name}/>{name}</h1>
      <div>
        <TotalReviews>{total} Reviews</TotalReviews>
        <Rating score={props.attributes.avg_score} />
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header