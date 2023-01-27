import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from  "./components/Navbar/Navbar";

//pages
import Home from  "./pages/Home/Home"
import CharacterInfo from './pages/CharacterInfo/CharacterInfo';
import  Location  from "./pages/Location/Location";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/info/:id" element={<CharacterInfo/>}/>
            <Route path="/location" element={<Location/>}/>
          </Routes>
        </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
