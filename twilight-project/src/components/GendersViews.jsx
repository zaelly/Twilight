// futuramente colocar uma area de login para salvar coisas q as pessoas querem assistir ou já assistiram
import { useState } from 'react';

import './GendersViews.css';

export const GendersViews = () => {

  const [role, setRole] = useState("");

  function handleRole(e){
    setRole(e.target.value)
  }
  
  return (
    <div id='lis' className='lis-container'> 
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
        <label>
          <span>Genêros</span>
          <select name="role" id="genders" onChange={handleRole()} value={role}>
            <option value="1">Animação</option>
            <option value="2">Familía</option>
            <option value="3">Terror</option>
            <option value="4">Comédia</option>
            <option value="5">Drama</option>
            <option value="6">Ação</option>
            <option value="7">Suspense</option>
            <option value="8">Guerra</option>
            <option value="9">Romance</option>
            <option value="10">Mistério</option>
            <option value="11">Fantasia</option>
            <option value="12">Musical</option>
            <option value="13">Documentário</option>
            <option value="14">Faroeste</option>
            <option value="15">Crime</option>
            <option value="16">Aventura</option>
            <option value="17">LGBTQIAP</option>
          </select>
        </label>
     </div>      
  )
}

export default GendersViews