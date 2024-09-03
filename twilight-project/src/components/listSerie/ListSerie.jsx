import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'

const ListSerie = () => {

    const [series, setSerie] = useState([]);
  
    useEffect(()=>{
        getSeries();
      }, []);

    const getSeries = () => {
        axios({
          method: 'GET',
          url: 'https://api.themoviedb.org/3/discover/movie',
          params:{
            api_key: '0deeb6dcd8b4bb61358ded8785516851',
            language: 'pt-BR'
          }
        }).then(response => {
            setSerie(response.data.results);
        }).catch(error => {
          console.error("Erro ao achar series ", error);
        });
      }

  return (
  <div className="container-sr">
    <ul className='list'>
      {series.map((serie)=>
        <li key={serie.id} className="flex-item">
            <img className="card-poster" src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} alt={serie.title} />
            <p className="card-title">{serie.title}</p>
            <p className='description'>{serie.overview}</p>
        </li>
      )}
    </ul>
  </div>
  )
}

export default ListSerie