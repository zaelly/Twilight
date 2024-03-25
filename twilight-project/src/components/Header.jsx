import React from 'react';
// import { BrowserRouter as Router, Route, Switch, a } from 'react-router-dom';
// import Home from '/src/pages/Home';
// import Movies from '/src/pages/Movies';
// import Serie from '/src/pages/Serie';
import './Header.css';
import OptionsComponent from '../components/OptionsComponent';
import Search from './Search';

const Header = () => {
  return (
    <>
      <div className='container-header'>
        <div className='logo'>
          <img className='logo-img' src="src/assets/invader-solid.png" alt="Logo-Invader" />
          <h1 className='logo-color-change'>OnmatioN</h1>
        </div>

        <nav>
          <a className="underline">Home</a>
          <a className="underline">Filmes</a>
          <a className="underline">Séries</a>
        </nav>
        <OptionsComponent />
        <Search />
      </div>
    </>
  )
}

export default Header;
