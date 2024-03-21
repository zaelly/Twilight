import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='container-Search'>
      <input className='input-Search' type="text" name='search' placeholder='Pesquisar...' />
    </div>
  )
}

export default Search