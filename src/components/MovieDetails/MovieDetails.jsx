import css from "./MovieDetails.module.css";

const url = "https://image.tmdb.org/t/p/w300/";

const MovieDetails = ({ movie }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={`${url}${movie.poster_path}`} />
      </div>
      <div className={css.containerDescription}>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={css.page}>Budget:</p>
        <p>{movie.budget}</p>
        <p className={css.page}>Overview:</p>
        <p>{movie.overview}</p>
        <p className={css.page}>Genres:</p>
        <ul className={css.list}>
          {movie.genres.map((genr) => (
            <li key={genr.id}>{genr.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
