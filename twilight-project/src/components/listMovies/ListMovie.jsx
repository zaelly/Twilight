import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './listMovie.css'

const ListMovie = () => {
    
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params:{
        api_key: '0deeb6dcd8b4bb61358ded8785516851',
        language: 'pt-BR'
      }
    }).then(response => {
      setMovies(response.data.results);
    }).catch(error => {
      console.error("Erro ao achar filmes ", error);
    });
  }
  return (
    <div className="flex-container">
    <ul className="list">
      {movies.map((movie) => (
        <li key={movie.id} className="flex-item">
          <Link to={`/onmation/assistirOnline/${movie.id}`}>
            <img className="card-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
          </Link>
          <Link to={`/onmation/assistirOnline/${movie.id}`}>
            <p className="card-title">{movie.title}</p>
          </Link>          
          <p className="description">{movie.overview}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ListMovie