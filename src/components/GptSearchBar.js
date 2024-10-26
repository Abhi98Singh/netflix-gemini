import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searhText = useRef(null);

  const dispatch = useDispatch();

  //search movie in TMDB :- fetching movie data using tmdb search api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    //  console.log(searhText.current.value);

    const geminiPromptQuery =
      "Act as a Movie Recommendation system and Suggest some movies for the query" +
      searhText.current.value +
      ". only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Tumbaad, 3 Idiots, Veer Zara, Don, Tees Maar Khan";

    //Make an API call to Gemini API to get Movie Results
    const geminiResults = await model.generateContent(geminiPromptQuery);

    if (!geminiResults.response) {
      //Todo : Error Handling
      console.log("Gemini API Failed!!");
    }
    // console.log(geminiResults.response.text()); => Andaz Apna Apna, Dil Chahta Hai, Lagaan, Swades,  Mughal-e-Azam
    const geminiRecommmendedMovies = geminiResults.response.text().split(","); //Will give Array of Movies using split()
    // ['Andaz Apna Apna', 'Dil Chahta Hai', 'Lagaan', 'Swades',  'Mughal-e-Azam']
    console.log(geminiRecommmendedMovies);

    //For each Movie we will call TMDB Serach API
    const promiseArray = geminiRecommmendedMovies.map((moviee) =>
      searchMovieTMDB(moviee)
    ); //this will return us Array of Promises
    //[Promise, Promise, Promise, Promise, Promise]

    const tmdbSearchResults = Promise.all(promiseArray); //Promise.all() method returns a single Promise from a list of promises,
    // console.log(tmdbSearchResults);
    tmdbSearchResults.then((movieResultsTMDB) => {
      console.log(movieResultsTMDB);
      dispatch(
        addGptMovieResult(
          //dispensing an obj(multiple values)
          {
            movieNames: geminiRecommmendedMovies,
            movieResults: movieResultsTMDB,
          }
        )
      );
    });
  };

  return (
    <div className="md:pt-[6%] pt-[27%] flex justify-center ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-6 m-6 w-full md:w-1/2 bg-black grid grid-flow-col"
      >
        <input
          ref={searhText}
          className="py-2 pl-3 col-span-11 text-lg font-medium  border-red-600 border-2 rounded-tl-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTSearchClick}
          className="py-2 px-4  col-span-1 font-medium text-lg bg-red-600 text-white rounded-tr-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
