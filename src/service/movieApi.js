import axios from "axios";

// const url =
//     "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = import.meta.env.VITE_TMDB_KEY;

const options = {
  headers: {
    Authorization: `Bearer ${key}`,
  },
};

export const getMoviesTrending = async () => {
  const data = await axios.get("/trending/movie/day?language=en-US", options);

  return data.data;
};

export const getMovieDetails = async (movieId) => {
  const data = await axios.get(`/movie/${movieId}`, options);

  return data.data;
};
