import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageContant'

const GptSearchbar = () => {

  const langkey = useSelector((store)=>store.config.lang)
  console.log(langkey)
  return (
    <div className='pt-40 flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input className="p-4 m-4 col-span-9"type='text' placeholder={lang[langkey].gptSearchPlaceholder}></input>
        <button className='m-4 bg-red-800 text-white px-4 py-2 col-span-3 rounded-2xl'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchbar