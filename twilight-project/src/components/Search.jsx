import './Search.css'

const Search = () => {
  return (
    <div className='container-Search'>
      <input className='input-Search' type="text" name='search' placeholder='Pesquisar...' />
      <span className='icon-span icon-search'><i className="fa-solid fa-magnifying-glass"></i></span>
    </div>
  )
}

export default Search