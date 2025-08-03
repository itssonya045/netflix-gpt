import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptSuggestion from './GptSuggestion'
import { Logo } from '../utils/Constant'

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
         <img
          src= {Logo}
          alt="background"
        />
      </div>
      <GptSearchbar/>
      <GptSuggestion/>
    </div>
  )
}

export default GPTSearch