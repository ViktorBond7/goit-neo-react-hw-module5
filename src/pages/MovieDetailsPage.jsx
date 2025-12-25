import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getMovieDetails } from "../service/movieApi";
import Container from "../components/Container/Container";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState(null);
  const param = useParams();

  useEffect(() => {
    const fetchMovieDet = async () => {
      const data = await getMovieDetails(param.movieId);
      console.log(data);
      setMovie(data);
    };
    fetchMovieDet();
  }, [param.movieId]);

  console.log(param.movieId);

  return (
    <Container>
      <GoBackBtn />
      {movie && <MovieDetails movie={movie} />}
    </Container>
  );
};

export default MovieDetailsPage;

// img src={`${adres}${movies.results[0].poster_path}`}
