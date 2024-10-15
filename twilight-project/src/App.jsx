import Header from './components/header/Header';
import './App.css';
import Home from '/src/pages/home/Home';
import Movies from '/src/pages/films/Movies';
import Serie from '/src/pages/series/Serie';
import Animes from './pages/anime/Animes';
import PagPlay from './pages/Modalplay/PagPlay'; 
import PagPlayAnime from './pages/Modalplay/PagPlayAnime'; 
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/serie/:id" element={<Serie />} />
        <Route path="/animes/:id" element={<Animes />} />
        <Route path="/onmation/assistirOnline/:id" element={<PagPlay />} />
        <Route path="/onmation/animes/:mal_id" element={<PagPlayAnime />} />
      </Routes>
    </div>
  );
}

export default App;
