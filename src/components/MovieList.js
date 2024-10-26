import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="px-10 pb-6 ">
      <h1 className="md:text-3xl text-2xl text-white  py-3">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar  py-2">
        <div className="flex ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
