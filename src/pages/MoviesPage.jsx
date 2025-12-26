import { useEffect, useState } from "react";
import { getMovieSearch } from "../service/movieApi";
import Container from "../components/Container/Container";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";

const Movies = () => {
  const [movies, setmovies] = useState([]);
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
      const data = await getMovieSearch(searchParams);
      setmovies(data.results);
    };

    fetchMovie();
  }, [searchParams]);

  return (
    <Container>
      <SearchForm handleSearch={updateSearchParams} />
      {movies && <MovieList movies={movies} />}
    </Container>
  );
};

export default Movies;
