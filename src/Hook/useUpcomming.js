import { useEffect } from "react"
import { API_Options } from "../utils/Constant"
import { useDispatch } from "react-redux"
import {addUpcommingMovies} from "../utils/MovieSlice"


const useUpcomming = ()=>{
    const dispatch = useDispatch()
    const getUpcomming = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_Options)
        const json = await data.json()
        dispatch(addUpcommingMovies(json.results))
    }

    useEffect(()=>{
        getUpcomming()
    },[])
}

export default useUpcomming