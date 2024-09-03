import Header from './components/header/Header';
import './App.css';
import Home from '/src/pages/home/Home';
import Movies from '/src/pages/films/Movies';
import Serie from '/src/pages/series/Serie';
import Animes from './pages/anime/Animes';
import PagPlay from './pages/Modalplay/PagPlay'; 
import { Routes, Route } from 'react-router-dom';
import GendersViews from './components/gendersViews/GendersViews';
import Footer from '/src/pages/footer/Footer';

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
        <Route path="/onmation/assistirOnline/:id" element={<PagPlay />} />
      </Routes>
      <GendersViews />
      <Footer />
    </div>
  );
}

export default App;
