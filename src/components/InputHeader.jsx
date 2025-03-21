import React, { useState } from 'react'
import Button from './common/Button'
import Input from './common/input'


function InputHeader({setInputData ,isLoading}) {
  const [input,setInput] = useState("");
  // const [button,setButton] = useState("");
  return (
    <div className='h-80 bg-black flex justify-center items-center text-white flex-col gap-6'>
     <h1 className='text-5xl font-bold px-3'>Unlimited movies, TV shows and more</h1>
      <form action="" className='flex gap-3 items-center'>
        <Input setInput = {setInput}  isLoading={isLoading}/>
        <Button input = {input} setInputData={setInputData} isLoading={isLoading}/>
      </form>
    </div>
  )
}

export default InputHeader
