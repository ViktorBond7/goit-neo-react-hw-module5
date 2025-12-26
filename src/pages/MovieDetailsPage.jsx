import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../service/movieApi";
import Container from "../components/Container/Container";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import AdditionalInf from "../components/AdditionalInf/AdditionalInf";
import ErrorMessege from "../components/ErrorMessege/ErrorMessege";
import Loader from "../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const getLinkBack = useRef(location.state || "/");

  useEffect(() => {
    const fetchMovieDet = async () => {
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        console.log(err.message);
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };
    fetchMovieDet();
  }, [movieId]);

  return (
    <>
      <Container>
        <GoBackBtn path={getLinkBack.current} />
        {isLoader && <Loader />}
        {movie && <MovieDetails movie={movie} />}
        {isError && <ErrorMessege />}
      </Container>
      {movie && <AdditionalInf />}
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MovieDetailsPage;
