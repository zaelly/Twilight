import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAnimes } from '../../data/data'

const ListAnime = () => {
    const [animes, setAnime] = useState([]);

    useEffect(() => {
        const animes = async () =>{
            const response = await getAnimes();
            setAnime(response);
        }
        animes()
    }, []);

    return (
        <div className='flex-container'> 
            <div className='list'>
                {animes.map((anime) => (
                    <div key={anime.mal_id}>
                        <Link to={`/onmation/animes/${anime.mal_id}`} className='flex-item'>
                            <img className="card-poster" src={anime.images.jpg.large_image_url} alt={anime.title} />                    
                            <h2 className="card-title">{anime.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListAnime;
