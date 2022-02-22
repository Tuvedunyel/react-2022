import { motion } from "framer-motion";

function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      layout
      className="movie__container"
    >
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />
      <div className="wrapper">
          <h3>{ movie.title }</h3>
          <p>{ movie.overview }</p>
          <strong>{ movie.release_date }</strong>
      </div>
    </motion.div>
  );
}

export default Movie;
