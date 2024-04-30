import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(res => res.json())
    .then(data => setMovie(data))
  }, [])
  const movieDisplay = movie.map(movie => (
    <MovieCard key={movie.id} title={movie} />
  ))
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieDisplay}
      </main>
    </>
  );
};

export default Home;
