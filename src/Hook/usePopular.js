import { useEffect } from "react"
import { API_Options } from "../utils/Constant"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/MovieSlice"


const usePopular = ()=>{
    const dispatch = useDispatch()

    const getPopularData = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options)
        const json = await data.json()
   
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        getPopularData()
    },[])

}

export default usePopular