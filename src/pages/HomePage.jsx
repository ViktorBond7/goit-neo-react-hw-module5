import { useEffect, useState } from "react";
import { getMoviesTrending } from "../service/movieApi";
import Container from "../components/Container/Container";
import MovieList from "../components/MovieList/MovieList";

const adres = "https://image.tmdb.org/t/p/w300/";
const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesTrending();
      setMovies(data.results);
      console.log(data);
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </Container>
  );
};

export default Home;
// img src={`${adres}${movies.results[0].poster_path}`}
