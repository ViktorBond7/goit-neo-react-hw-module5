import { useEffect, useState } from "react";
import { getMoviesTrending } from "../service/movieApi";
import Container from "../components/Container/Container";
import MovieList from "../components/MovieList/MovieList";
import ErrorMessege from "../components/ErrorMessege/ErrorMessege";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await getMoviesTrending();
        setMovies(data.results);
      } catch (err) {
        console.log(err.message);
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
      {isLoader && <Loader />}
      {isError && <ErrorMessege />}
    </Container>
  );
};

export default Home;
