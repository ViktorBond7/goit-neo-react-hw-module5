import { useEffect, useState } from "react";
import { getMovieReviews } from "../../service/movieApi";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import ErrorMessege from "../ErrorMessege/ErrorMessege";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoader(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {isLoader && <Loader />}
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
      {isError && <ErrorMessege />}
    </>
  );
};

export default MovieReviews;
