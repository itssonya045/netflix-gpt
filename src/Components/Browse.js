import React from 'react'
import Header from './Header'
import useNowPlayingMoview from "../Hook/useNowPlayingMoview"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopular from '../Hook/usePopular'
import useUpcomming from '../Hook/useUpcomming'




const Browse = () => {

  
  useNowPlayingMoview();
  usePopular();
  useUpcomming();

 


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse