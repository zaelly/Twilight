import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css'
import { getMovies } from '../../data/data';

function Carosel() {

    const [topRated, setRated] = useState([]);
    const [index, setIndex] = useState(0);
  
    useEffect(()=>{
        const fetchData = async () => {
            const movies = await getMovies();
            setRated(movies);
        }
        fetchData();
      }, []);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };
    
  return (
    <Carousel className='carousel carouselDp' interval={3000} activeIndex={index} onSelect={handleSelect}>
      {topRated.map((rated) => (
        <Carousel.Item key={rated.id}>
          <img
            className=" w-200"
            src={`https://image.tmdb.org/t/p/w500${rated.poster_path}`}
            alt={rated.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carosel;