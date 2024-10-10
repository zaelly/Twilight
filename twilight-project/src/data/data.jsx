import axios from 'axios';

export const getMovies = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '0deeb6dcd8b4bb61358ded8785516851',
        language: 'pt-BR'
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar resultados", error);
    return [];
  }
};

export const getSeries = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          api_key: '0deeb6dcd8b4bb61358ded8785516851',
          language: 'pt-BR'
        }
      });
      return response.data.results;
    } catch (error) {
      console.error("Erro ao buscar resultados", error);
      return [];
    }
  };

export const getAnimes = async () =>{
  try{
    const response = await axios({
      method: 'GET',
      url: 'https://api.jikan.moe/v4/anime',
      params: {
        language: 'pt-br'
      }
    });
    return response.data.data;
  }catch(error){
    console.error("Erro ao buscar resultados", error);
    return [];
  }
}

/////////////////////////////////////////////////////

export const getVideoMovie = async(id) =>{
try{
  const response = await axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: {
      api_key: '0deeb6dcd8b4bb61358ded8785516851',
      language: 'pt-BR'
    }
  })
    return response.data
}catch(error){
  console.error("Erro ao buscar resultados", error);
}
}

export const getAnimesVideo = async (mal_id) =>{
  try{
    const response = await axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/anime/${mal_id}`,
    });
    return response.data.data;
  }catch(error){
    console.error("Erro ao buscar resultados", error);
    return [];
  }
}
