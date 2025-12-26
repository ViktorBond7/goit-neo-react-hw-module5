import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../service/movieApi";
import Container from "../components/Container/Container";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import AdditionalInf from "../components/AdditionalInf/AdditionalInf";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDet = async () => {
      const data = await getMovieDetails(movieId);
      console.log(data);
      setMovie(data);
    };
    fetchMovieDet();
  }, [movieId]);

  return (
    <>
      <Container>
        <GoBackBtn />
        {movie && <MovieDetails movie={movie} />}
      </Container>
      {movie && <AdditionalInf />}
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MovieDetailsPage;
