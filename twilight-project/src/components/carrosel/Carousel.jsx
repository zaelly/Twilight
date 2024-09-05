import './index.css'
import axios from "axios";
import { useEffect, useState } from "react";

// resolver problema de api que nao esta mostrantwilight-project/src/components/carrosel/Carousel.jsxdo resultado na tela e dando erro no log
const Carousel = () => {

  const [topRated, setRated] = useState([]);
  
  useEffect(()=>{
      getRated();
    }, []);

  const getRated = () => {
      axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params:{
          api_key: '0deeb6dcd8b4bb61358ded8785516851',
          language: 'pt-BR'
        }
      }).then(response => {
        setRated(response.data.results);
      }).catch(error => {
        console.error("Erro ao buscar top rated", error);
      });
    }
  return (
    <div className="flex-container carouselDp">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {topRated.map((rated, index) => (
            <div key={rated.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${rated.poster_path}`} 
                className="d-block w-100" 
                alt={rated.title || 'Movie poster'} 
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
