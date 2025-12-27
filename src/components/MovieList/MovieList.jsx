import MovieItem from "../MovieItem/MovieItem";
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
