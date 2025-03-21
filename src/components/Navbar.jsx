import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='w-full h-12 bg-emerald-500 text white flex justify-around items-center text-white'>
            <Link to={"/"}>MoviePedia</Link>
           <Link to={"/favorite"}>Favorite</Link>
        </div>
    </>
  )
}

export default Navbar
