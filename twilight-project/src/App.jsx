import Header from './components/header/Header'
import './App.css'
import Home from '/src/pages/home/Home';
import Movies from '/src/pages/films/Movies';
import Serie from '/src/pages/series/Serie';
import Animes from './pages/anime/Animes';
import {Routes, Route } from 'react-router-dom'
import GendersViews from './components/gendersViews/GendersViews';


function App() {

  return (
      <div className='App'>
        <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies/:id" element={<Movies/>} />
        <Route path="/serie/:id" element={<Serie/>} />
        <Route path="/animes/:id" element={<Animes/>} />
      </Routes>
      <GendersViews/>
      </div>
  )
}

export default App