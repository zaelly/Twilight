import './Header.css';
import { Link } from 'react-router-dom'
import Search from '../search/Search';
import { useState } from 'react';

const Header = () => {

  const [bars, setBars] = useState(false);

  function handleRole() {
    setBars(!bars);
  }

  return (
    <>
      <div className='container-header'>
        <div className='logo'>
          <Link className='logo-color-change logo-title' to="/">OnmatioN</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/movies/1" className="underline">
                <span className='icon-span'><i className="fa-solid fa-film"></i></span>
                Filmes
              </Link>
            </li>
            <li>
              <Link to="/serie/1" className="underline">
                <span className='icon-span'><i className="fa-solid fa-video"></i></span>
                Séries
              </Link>
            </li>
            <li>
              <Link to="/animes/1" className="underline">
                <span className='icon-span'><i className="fa-solid fa-ghost"></i></span>
                Animes
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
        <div className="genders">
          <span className={`iconX ${bars ? 'active' : ''}`} id='iconX' onClick={handleRole}>
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div id='lis' className='lis-container'> 
          {bars && (
        <div className="list-genders">
            <ul>
                <p>Genêros</p>
                <a href="">Animação</a>
                <a href="">Familía</a>
                <a href="">Terror</a>
                <a href="">Comédia</a>
                <a href="">Drama</a>
                <a href="">Ação</a>
                <a href="">Suspense</a>
                <a href="">Guerra</a>
                <a href="">Romance</a>
                <a href="">Mistério</a>
                <a href="">Fantasia</a>
                <a href="">Musical</a>
                <a href="">Documentário</a>
                <a href="">Faroeste</a>
                <a href="">Crime</a>
                <a href="">Aventura</a>
                <a href="">LGBTQIAP+</a>
            </ul>
        </div>  
        )}
     </div>
      </div>
    </>
  )
}

export default Header;
