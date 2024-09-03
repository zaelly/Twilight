import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './index.css'

const PagPlay = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: {
        api_key: '0deeb6dcd8b4bb61358ded8785516851',
        language: 'pt-BR'
      }
    }).then(response => {
      setVideo(response.data);
    }).catch(error => {
      console.error("Erro ao buscar detalhes", error);
    });
  }, [id]);

  if (!video) return <p>Carregando...</p>;

  return (
   <div className="mainContainer">
      <video width="800" className="video" controls>
        <source src={`https://onmation.com/assistirOnline/${video.title}`} type="video/mp4"/>
      </video>
      <div className="container-controller">
        <h1 className="titlePag">{video.title}</h1>
        <p className="textView">{video.overview}</p>
      </div>
    </div>
  )
}

export default PagPlay