import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto; 
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`
const SubHeader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('/api/movies.json')
    .then(resp => setMovies(resp.data.data))
    .catch(resp => console.log(resp))
  }, [movies.length])

  const grid = movies.map( i => {
    return (
      <Movie 
        key={i.attributes.name}
        attributes={i.attributes} 
      />
    )
  })

  return (
    <Home>
      <Header>
        <h1>Floppy Potatoes</h1>
        <SubHeader>Movie reviews that are just...meh!</SubHeader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Movies