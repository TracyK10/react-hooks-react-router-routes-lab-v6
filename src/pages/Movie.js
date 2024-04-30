import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movieObj, setMovieObj] = useState({});
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(res => res.json())
      .then(data => setMovieObj(data))
    .catch(err => console.log(err))
  }, [movieId])

  if (!movieObj.title) return <h1>Loading...</h1>
  
  const genres = movieObj.genres.map(genre => (
    <span key={genre}>{genre}</span>
  ))
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Title: {movieObj.title}</h1>
        <p>Time: {movieObj.time}</p>
        <span>Genres: {genres}</span>
      </main>
    </>
  );
};

export default Movie;
