import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from  "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//pages
import Home from  "./pages/Home/Home"
import CharacterInfo from './pages/CharacterInfo/CharacterInfo';
import Location  from "./pages/Location/Location";
import LocationInfo from './pages/LocationInfo/LocationInfo';
import Search from './pages/Search/Search';
import Episodes from "./pages/Episodes/Episodes";
import EpisodeInfo from "./pages/EpisodeInfo/EpisodeInfo";


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
            <Route path="/location/:id" element={<LocationInfo/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
            <Route path="/episodes/:id" element={<EpisodeInfo/>}/>
            <Route path="/search" element={<Search/>}/>
          </Routes>

        </div>
      <Footer/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
