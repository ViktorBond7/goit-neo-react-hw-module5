import { useEffect, useState } from "react";
import { getMovieCredits } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import css from "./MovieCast.module.css";

const url = "https://image.tmdb.org/t/p/w300/";

const MovieCast = () => {
  const [movieCredits, setMovieCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      const data = await getMovieCredits(movieId);
      setMovieCredits(data);
    };

    fetchCredits();
  }, [movieId]);

  return (
    <>
      <ul className={css.list}>
        {movieCredits &&
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
          ))}
      </ul>
    </>
  );
};

export default MovieCast;
