import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title.title}</h2>
        <Link to={`/movie/${title.id}`}>More info</Link>
    </article>
  );
};

export default MovieCard;