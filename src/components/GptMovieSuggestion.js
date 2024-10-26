import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  //subscribing
  const gpt = useSelector((store) => store.gpt);

  //destrcturing
  const { movieResults, movieNames } = gpt;
  console.log(movieNames);
  console.log(movieResults);

  //error handling
  if (!movieNames) return null;

  return (
    <div className="m-4 p-4 bg-black bg-opacity-75 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            title={movieName}
            movies={movieResults[index]}
            key={movieName}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
