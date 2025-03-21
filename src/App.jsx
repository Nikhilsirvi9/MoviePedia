import InputHeader from './components/InputHeader'
import MovieContainer from './components/MovieContainer'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Favorite from './components/Favorite';
import MovieDetail from './components/MovieDetail';


function App() {
    const [inputData, setInputData] = useState(["game of thrones"]);
    const [isLoading, setIsLoading] = useState(false);
    const [detail, setDetails] = useState("");

  
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<><InputHeader setInputData={setInputData} isLoading={isLoading} />  <MovieContainer inputData={inputData} setIsLoading={setIsLoading} isLoading={isLoading} setDetails={setDetails}/> </>} />
                <Route path='/favorite' element={<Favorite />} />
                <Route path='/details' element={<MovieDetail detail = {detail}/>} />
            </Routes>
        </div>

    );
}

export default App