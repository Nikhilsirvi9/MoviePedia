import React from 'react'
import MovieDetail from './MovieDetail'



function MovieCard({poster,title}) {
  
  const DetailsHandler = () =>{
      
      console.log("soidfn")
  }


  return (
    <div className='h-80 w-60 m-5 my-6 relative overflow-hidden shadow-md' onClick={()=><MovieDetail />}>
      <img className='w-[100%] h-[100%] object-cover' src={poster} alt={title} />
      <div className='bg-black  h-[100%] w-[100%] absolute top-0 left-0 opacity-0 hover:opacity-70 transition-opacity duration-300 shadow-2xl text-white flex justify-center items-center' >
      <p className='font-semibold text-xl pl-3'>{title}</p>
      </div>
    </div>
  )
}

export default MovieCard
