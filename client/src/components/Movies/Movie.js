import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`
const MoviePoster = styled.div`
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 250px;
    width: 200px;
    border-radius: 5px;
    border: 1px solid #efefef;
  }
`
const MovieName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const Movie = (props) => {
  return (
    <Card>
      <MoviePoster>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </MoviePoster>
      <MovieName>{props.attributes.name}</MovieName>
      <div className="movie-score">{props.attributes.avg_score}</div>
      <LinkWrapper>
        <Link to={`/movies/${props.attributes.slug}`}>View Movie</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Movie