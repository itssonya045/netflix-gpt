import React from 'react'
import Header from './Header'
import useNowPlayingMoview from "../Hook/useNowPlayingMoview"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {

  
  useNowPlayingMoview();
 


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse