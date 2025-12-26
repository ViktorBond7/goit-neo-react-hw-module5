import { useEffect, useState } from "react";
import { getMovieSearch } from "../service/movieApi";
import Container from "../components/Container/Container";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessege from "../components/ErrorMessege/ErrorMessege";
import Loader from "../components/Loader/Loader";

const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (value) => {
    // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams);

    // 2. Оновлюємо певний ключ
    value ? updatedParams.set("query", value) : updatedParams.delete("query");

    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams);
  };

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) return;

    const fetchMovie = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const data = await getMovieSearch(searchParams);

        setmovies(data.results);
      } catch (err) {
        console.log(err.message);
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };

    fetchMovie();
  }, [searchParams]);

  return (
    <Container>
      {isLoader && <Loader />}
      <SearchForm handleSearch={updateSearchParams} />
      {movies.length > 0 ? <MovieList movies={movies} /> : <p>Nothing found</p>}
      <Toaster />
      {isError && <ErrorMessege />}
    </Container>
  );
};

export default Movies;
