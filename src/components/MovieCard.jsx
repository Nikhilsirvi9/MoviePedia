import React from 'react'
import { Link } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr";




function MovieCard({poster,title,id,setDetails}) {
  
  const DetailsHandler = () =>{
      
      setDetails(id)
  }


  return (
    
      <div className='h-80 w-60  relative overflow-hidden shadow-md bg-black'>
      <img className='w-[100%] h-[100%] object-cover' src={poster} alt={title} />
      <div className='bg-black  h-[100%] w-[100%] absolute top-0 left-0 opacity-0 hover:opacity-70 transition-opacity duration-300 shadow-2xl text-white flex justify-center items-center' >
      <Link to={"/details"} onClick={DetailsHandler} className='font-semibold text-xl pl-3' >{title}</Link>

      <GrFavorite className='absolute top-5 right-5 size-5 hover:size-8 duration-300 cursor-pointer'/>
      </div>
    </div>
  )
}

export default MovieCard
