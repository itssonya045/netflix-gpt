import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className='bg-black'>
      <div className='-mt-36  relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular-Movie"} movies={movies.PopularMovie}/>
      <MovieList title={"Upcomming"} movies={movies.Upcomming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer