import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = import.meta.env.VITE_TMDB_KEY;
axios.defaults.headers.common["Authorization"] = `Bearer ${key}`;

// const options = {
//   headers: {
//     Authorization: `Bearer ${key}`,
//   },
// };

export const getMoviesTrending = async () => {
  const data = await axios.get("/trending/movie/day?language=en-US");

  return data.data;
};

export const getMovieDetails = async (movieId) => {
  const data = await axios.get(`/movie/${movieId}`);

  return data.data;
};

export const getMovieReviews = async (movieId) => {
  const data = await axios.get(`/movie/${movieId}/reviews`);

  return data.data.results;
};

export const getMovieCredits = async (movieId) => {
  const data = await axios.get(`/movie/${movieId}/credits`);

  return data.data.cast;
};

export const getMovieSearch = async (params) => {
  const data = await axios.get(`/search/movie?${params}`);

  return data.data;
};
