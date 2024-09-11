import axios from 'axios';
import './Search.css';
import { useEffect, useState } from 'react';
import SearchList from '../searchList/SearchList';

const Search = () => {
  // Estado para armazenar o termo de pesquisa e resultados
  const [inputBtn, setInputBtn] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [search, setSearch] = useState(false)

  // Obtém os dados da API e armazena em results
  useEffect(() => {
    getSearch();
  }, []);

  const getSearch = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          api_key: '0deeb6dcd8b4bb61358ded8785516851',
          language: 'pt-BR'
        }
      });
      setResults(response.data.results);
      setFilteredResults(response.data.results); // Inicialmente mostra todos os resultados
    } catch (error) {
      console.error("Erro ao buscar filmes: ", error);
    }
  };

// se o usuario não colocar uma palavra completa ou só uma frase. o buscador vai fazer aparecer uma pag diferente com
// os resultados dessa palavra incompleta ou completa
//se n tiver resultado nenhum, é pra mostrar q n tem resultado

  const handleSearch = () =>{
      setSearch(!search)
  }

  const handleChange = (event) => {
    const query = event.target.value;
    setInputBtn(query);
    // Filtra resultados baseados no termo de pesquisa
    const filtroResult = results.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) // Use "title" para filmes
    );

    setFilteredResults(filtroResult);
  };

  return (
    <div className='container-Search'>
      <input
        className='input-Search'
        type="text"
        name='search'
        placeholder='Pesquisar...'
        value={inputBtn}
        onFocus={handleSearch}
        onChange={handleChange}
      />
      <button
        type="button"
        className='btn-search'
        onClick={() => handleChange({ target: { value: inputBtn } })} // Simula um clique no botão
      >
        <span className='icon-span icon-search'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </button>
      {search && (
        filteredResults.length > 0 && (
          <SearchList results={filteredResults} />
        )
      )}
    </div>
  )
}

export default Search;
