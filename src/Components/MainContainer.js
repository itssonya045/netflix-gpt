import React from 'react'
import Videotitle from './Videotitle'
import VideoBacKGround from './VideoBacKGround'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector((store)=>store.movies?.nowPlayingMovies )
    if(!movie)return

    const mainMovie = movie[0]
    

    const {original_title,overview , id} = mainMovie

  return (
    <div>
        <Videotitle title ={original_title} overview={overview}/>
        <VideoBacKGround movieid={id} />
    </div>
  )
}

export default MainContainer