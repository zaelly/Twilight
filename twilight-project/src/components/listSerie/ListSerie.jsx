import { useEffect, useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import Footer from '/src/pages/footer/Footer';
import { getSeries } from '../../data/data';

const ListSerie = () => {

    const [series, setSerie] = useState([]);
  
    useEffect(()=>{
      const series = async()=>{
        const result = await getSeries();
        setSerie(result);
      }
      series();
      }, []);

  return (
  <div className="flex-container">
    <div className='list'>
      {series.map((serie)=>
       <Link className="listT" key={serie.id} to={`/onmation/assistirOnline/${serie.id}`}>
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