import { Route, Routes } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Movies />} />
      <Route exact path="/movies/:slug" element={<Movie />} />
    </Routes>
  </>
)

export default App;
