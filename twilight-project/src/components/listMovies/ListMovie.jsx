import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './listMovie.css'
import Footer from '/src/pages/footer/Footer';
import { getMovies } from '../../data/data';


const ListMovie = () => {
    
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const movies = async() => {
      const response = await getMovies()
      setMovies(response);
    }
    movies();
  }, []);

  return (
  <div className="flex-container">
    <div className="list">
      {movies.map((movie) => (  
        <div key={movie.id}>
          <Link to={`/onmation/assistirOnline/${movie.id}`} className="flex-item">
              <img className="card-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <h2 className="card-title">{movie.title}</h2>
          </Link>    
        </div>
      ))}
    </div>
    <Footer/>
  </div>
  )
}

export default ListMovie