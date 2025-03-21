import React, { useState,useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";

function MovieDetail({detail}) {

  const[info,setInfo] = useState({})
  const[isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
      const fetchMovieDetails = async ()=>{
        setIsLoading(true)
        const URL =`https://www.omdbapi.com/?apikey=f18a0904&i=${detail}`;
        const response = await fetch(URL);
        const finalData =  await response.json();
        await new Promise((res)=> setInterval(res,300));
        // if (finalData.Response === "True") {
        //   setInfo(finalData);
        // } else {
         
        //   // setMovies([]);
        // }
        setInfo(finalData)
        setIsLoading(false)

        // console.log(finalData)
      }
      fetchMovieDetails()
    },[])
  return (
   <>
    <div className='bg-black text-white min-h-screen h-max  w-full flex items-center justify-center relative'>
          { !isLoading? <div className='min-h-[35rem] h-max w-[29rem]  bg-slate-300 my-5'>
              <div className='h-80 bg-gray-700   border-2 border-zinc-500	 flex items-center justify-around p-3'>
                <img src={info.Poster} className='h-72 w-52 p-3 object-cover' alt="" />
                <h1>{info.Title}</h1>
              </div>
               <div className='w-[100%] grid grid-cols-2 border-2 border-slate-600		 gap-4 p-3 bg-gray-600'>
                <p>Year : {info.Year}</p>
                <p>Runtime : {info.Runtime}</p>
                <p>Genre : {info.Genre}</p>
                <p>Director : {info.Director}</p>
                <p>Writer : {info.writer}</p>
                <p>Actors : {info.Actors}</p>
                <p>Plot : {info.Plot}</p>
                <p>Language : {info.Language}</p>
                <p>Country : {info.Country}</p>
                <p>Awards : {info.Awards}</p>
                <p>imdbRating : {info.imdbRating}</p>
                <p>imdbVotes : {info.imdbVotes}</p>
               </div>
          </div>:
          <PuffLoader
        color="white"
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner" 
      />
       }
    </div>
   </>
  )
}

export default MovieDetail
