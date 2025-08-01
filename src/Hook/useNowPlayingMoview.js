import { API_Options } from '../utils/Constant'
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/MovieSlice";
import { useEffect } from 'react';

const useNowPlayingMoview = ()=>{ 


  const dispatch = useDispatch(); 


  const getMovieData = async()=>{
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_Options)
  const json = await data.json();

  dispatch(addNowPlayingMovies(json.results))
 }


 useEffect(()=>{
  getMovieData()
 }, [])
}

export default useNowPlayingMoview;