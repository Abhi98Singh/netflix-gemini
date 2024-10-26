/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

//Created a custom hook useNowPlayingMovies() for fetching nowplaying movies data from TMDB and updating/putting it the store
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    //if nowPlayingMovies is not there in store then only make a API call
    if (!nowPlayingMovies) getNowPlayingMovies();
    // !nowPlayingMovies && getNowPlayingMovies();
  }, []); //calling this API callling function in useEffect, bcz we want to call it once when the comp renders

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };
};

export default useNowPlayingMovies;
