import React from 'react'
import { useState } from 'react';
import './Header.css'
import OptionsComponent from '../components/OptionsComponent'
import Search from './Search';

const Header = () => {

  //fazer com que as pags sejam mudadas dentro dela mesma logo abaixo
    //a do header, qnd o home, films ou series forem selecionados 

  const mood = ()=>{
    if(window.location.pathname === "/") return <Home/>;
    else if (window.location.pathname.includes("/movies"))return <Movies/>
  }
  
  return (
    <div className='container-header'>
        <div className='logo'>
          <img className='logo-img' src="src/assets/invader-solid.png" alt="Logo-Invader" />
          <h1 className='logo-color-change'>OnmatioN</h1>
        </div>

        <nav>
          <a className="underline">Home</a>
          <a className="underline">Filmes</a>
          <a className="underline">Séries</a>
          <a className="underline">Animes</a>
        </nav>
        <OptionsComponent />
        <Search />
    </div>
  )
}

export default Header