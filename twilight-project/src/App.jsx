import Header from '../src/components/Header'
import './App.css'
import Home from '/src/pages/Home';
import Movies from '/src/pages/Movies';
import Serie from '/src/pages/Serie';
import Animes from './pages/Animes';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <div className='App'>
        <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/serie" element={<Serie/>} />
        <Route path="/animes" element={<Animes/>} />
      </Routes>
      </div>
  )
}

export default App