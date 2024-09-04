import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './listMovie.css'
import Footer from '/src/pages/footer/Footer';

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