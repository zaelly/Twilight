import './Header.css';
import { Link } from 'react-router-dom'
import Search from '../search/Search';


const Header = () => {
  return (
    <>
      <div className='container-header'>
        <div className='logo'>
          <img className='logo-img' src="src/assets/invader-solid.png" alt="Logo-Invader" />
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
      </div>
    </>
  )
}

export default Header;
