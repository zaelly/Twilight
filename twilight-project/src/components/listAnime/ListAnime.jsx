import axios from 'axios';
import { useEffect, useState } from 'react';

const ListAnime = () => {

    const [animes, setAnime] = useState([])

    useEffect(()=>{
        getAnimes();
    }, []);

    const getAnimes = () => {
        axios.get('https://jikan1.p.rapidapi.com/meta/requests/anime/today')
        .then(response => {
            setAnime(response.data.data)
            console.log(response.data.data)
        }) 
    }

    const options = {
        method: 'GET',
        url: 'https://jikan1.p.rapidapi.com/meta/requests/anime/today',
        headers: {
          'x-rapidapi-key': '9a8e810d21msh539550fde5a4585p168fd6jsn50c0d15e3dca',
          'x-rapidapi-host': 'jikan1.p.rapidapi.com'
        }
      };

      axios.request(options) 
      .then(response => {
        setAnime(response.data.data)
        console.log(response.data);
        })

  return (
    <div className='flex-container'> 
        <ul className='list'>
            {animes.map((anime)=>(
                <li key={anime.id} className='flex-item'>
                    <img src="{`https://${anime.poster_path}}" alt={anime.title} />                    
                    <p>{anime.title}</p>
                    <p>{anime.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListAnime