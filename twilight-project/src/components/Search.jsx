import './Search.css'
import { useState } from 'react';

const Search = () => {

  //colocar api para buscar o que o user procura
  const [inputBtn, setInputBtn] = useState('');

  const handleEnter = (e)=>{
    if(e.key == "Enter"){
      console.log("Pesquisa:", inputBtn)
    }
  }

  const  handleSubmit = () => {
    console.log("Pesquisa:", inputBtn)
  }

  const handleChange = (e)=>{
    setInputBtn(e.target.value);
  }

  return (
    <form className='container-Search'>
      <input className='input-Search' type="text" name='search' placeholder='Pesquisar...' onChange={handleChange} onKeyDown={handleEnter}/>
      <button type="submit" className='btn-search' onClick={handleSubmit}>
        <span className='icon-span icon-search'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </button>
    </form>
  )
}

export default Search