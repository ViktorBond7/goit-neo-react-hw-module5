import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <>
      <Link to={`/movies/${movie.id}`}>
        <p>{movie.title}</p>
      </Link>
    </>
  );
};

export default MovieItem;
