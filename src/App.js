import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import CharacterInfo from './pages/CharacterInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/info/:id" element={<CharacterInfo/>}/>

          </Routes>
        </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
