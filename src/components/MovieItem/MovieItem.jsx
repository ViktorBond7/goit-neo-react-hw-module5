import { Link, useLocation } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const location = useLocation();

  return (
    <>
      <Link to={`/movies/${movie.id}`} state={location}>
        <p>{movie.title}</p>
      </Link>
    </>
  );
};

export default MovieItem;
