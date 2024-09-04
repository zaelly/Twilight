import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import Footer from '/src/pages/footer/Footer';

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
  <div className="flex-container">
    <div className='list'>
      {series.map((serie)=>
       <Link key={serie.id} to={`/onmation/assistirOnline/${serie.id}`}>
        <div className="flex-item">
          <img className="card-poster" src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} alt={serie.title} />         
          <h2 className="card-title">{serie.title}</h2>
        </div>
        </Link>
      )}
    </div>
    <Footer/>
  </div>
  )
}

export default ListSerie