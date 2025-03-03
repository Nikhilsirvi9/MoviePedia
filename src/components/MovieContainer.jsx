import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import PuffLoader from "react-spinners/PuffLoader";

function MovieContainer({inputData ,setIsLoading,isLoading}) {
  const [movies,setMovies] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(()=>{
    const fetchMovie = async ()=>{
      setIsLoading(true);
      const URL =`https://www.omdbapi.com/?apikey=f18a0904&s=${inputData}`;
      const response = await fetch(URL);
      const finalData =  await response.json();
      await new Promise((res)=> setInterval(res,1000));
      console.log(finalData);
      if (finalData.Response === "True") {
        setIsAvailable(true);
        setMovies(finalData.Search);
      } else {
        setIsAvailable(false);
        // setMovies([]);
      }
      setMovies(finalData.Search)
      setIsLoading(false);
    }
    fetchMovie()

  },[inputData])


  return (
    <div className='bg-slate-800 min-h-[calc(100vh-20rem)] h-auto flex gap-10 flex-wrap justify-center pt-5'>
      {
         !isLoading?  isAvailable? movies.map((mov)=>{
          return (
             <MovieCard poster = {mov.Poster}  title = {mov.Title} key = {mov.imdbID} />
          )
        }) : <h1 className='text-white text-4xl flex items-center'>MOVIE NOT FOUND!</h1> :
        <PuffLoader
        color="white"
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
      />
      }
      
    </div>
  )
}

export default MovieContainer
