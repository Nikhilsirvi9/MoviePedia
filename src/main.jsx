import { createRoot } from 'react-dom/client'
import './index.css'
import InputHeader from './components/InputHeader'
import MovieContainer from './components/MovieContainer'
import { useState } from 'react'

function App() {
  const [inputData, setInputData] = useState(["game of thrones"]);
  const [isLoading,setIsLoading] = useState(false);

console.log(inputData)
  return (
    <div>
      <InputHeader setInputData={setInputData} isLoading={isLoading}/>
      <MovieContainer inputData={inputData} setIsLoading={setIsLoading} isLoading={isLoading} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);