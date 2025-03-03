import React from 'react'


function Button({input,setInputData,isLoading}) {

    const setButtonHandler = (event)=>{
      event.preventDefault();
        setInputData(input);
    }
  return (
   <button className='bg-red-500 p-1 px-3 rounded-md' onClick={setButtonHandler} disabled={isLoading}>Search</button>
  )
}

export default Button
