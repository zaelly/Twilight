import { useEffect, useState } from "react";
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
    })
  }

  return (
    <div className="conteudo">
        <ul className="movie-list">
            {movies.map((movie)=>{
                <li className="card-title">{movie.title}</li>
            })}
        </ul>
    </div>
  )
}

export default ListMovie