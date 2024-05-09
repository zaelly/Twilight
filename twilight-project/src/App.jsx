import Header from '../src/components/Header'
import './App.css'
import Home from '/src/pages/Home';
import Movies from '/src/pages/Movies';
import Serie from '/src/pages/Serie';
import Animes from './pages/Animes';
import {Routes, Route } from 'react-router-dom'
import GendersViews from './components/GendersViews';


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