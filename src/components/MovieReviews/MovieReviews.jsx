import { useEffect, useState } from "react";
import { getMovieReviews } from "../../service/movieApi";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getMovieReviews(movieId);

      setMovieReviews(data);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {movieReviews.length > 0 ? (
        movieReviews.map((movieReviews) => (
          <li className={css.item} key={movieReviews.id}>
            <p className={css.page}>{movieReviews.author}</p>
            <p>{movieReviews.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews...</p>
      )}
    </ul>
  );
};

export default MovieReviews;
