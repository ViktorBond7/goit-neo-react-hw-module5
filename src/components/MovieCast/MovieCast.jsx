import { useEffect, useState } from "react";
import { getMovieCredits } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import css from "./MovieCast.module.css";
import ErrorMessege from "../ErrorMessege/ErrorMessege";
import Loader from "../Loader/Loader";

const url = "https://image.tmdb.org/t/p/w300/";

const MovieCast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const data = await getMovieCredits(movieId);
        setMovieCredits(data);
      } catch (err) {
        setIsError(true);
        console.log(err.message);
      } finally {
        setIsLoader(false);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <>
      {isLoader && <Loader />}
      <ul className={css.list}>
        {movieCredits.length > 0 ? (
          movieCredits.map((movieCredit) => (
            <li className={css.item} key={movieCredit.id}>
              {movieCredit.profile_path ? (
                <img
                  className={css.img}
                  src={`${url}${movieCredit.profile_path}`}
                  alt={movieCredit.original_name}
                />
              ) : (
                <IoIosContact className={css.icon} size="300" />
              )}
              <p className={css.page}>
                <GoDotFill size="12px" /> {movieCredit.name}
              </p>
            </li>
          ))
        ) : (
          <p>No credits</p>
        )}
      </ul>

      {isError && <ErrorMessege />}
    </>
  );
};

export default MovieCast;
