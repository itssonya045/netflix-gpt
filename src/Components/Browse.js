import React from 'react'
import Header from './Header'
import useNowPlayingMoview from "../Hook/useNowPlayingMoview"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopular from '../Hook/usePopular'
import useUpcomming from '../Hook/useUpcomming'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'




const Browse = () => {
  
  const showGPT = useSelector((store)=>store.gpt.showGPT)
  
  useNowPlayingMoview();
  usePopular();
  useUpcomming();

 


  return (
    <div>
      <Header/>
      {showGPT ? <GPTSearch/> :
       <>
      (<MainContainer/>
      <SecondaryContainer/>)_
      </>
}     
    </div>
    

  )
}

export default Browse