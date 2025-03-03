import React from 'react'


function Input({setInput,isLoading}) {
  const setInputHandler = (event) =>
  {
    setInput(event.target.value)
  }
  return (
   <input disabled={isLoading} className='w-[18rem] h-6 bg-slate-600/65 p-2 py-4 rounded-md border border-white outline-none text-sm' onChange={setInputHandler} placeholder='Enter any Movies,Series or Shows' type="text" />
  )
}

export default Input
