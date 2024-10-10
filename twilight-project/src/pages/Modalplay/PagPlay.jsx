import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css'
import { getVideoMovie } from '../../data/data';
import { getAnimesVideo } from '../../data/data';
import Coments from "../../components/coments/Coments";

const PagPlay = () => {
  const { mal_id, id } = useParams();
  const [video, setVideo] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
  const fetchMovie = async () => {
      let movieResponse = null;
      let animeResponse = null; 

      if(id){
        movieResponse = await getVideoMovie(id);
      } if (mal_id) {
        animeResponse = await getAnimesVideo(mal_id);
      }
      
     setVideo(movieResponse || animeResponse);
  }
  fetchMovie()
  }, [id, mal_id]);

  if (!video) return <p>Carregando...</p>;
// se id vier como filme ele nao vai mostrar os btn para serie
// se sim ele vai mostrar os btn para serie

//colocar mais de um player
//colocar video ao lado do aba de detalhes
//colocar sessão de comentarios tbm

  return (
  <div className="mainContainer">
    <div className="container-overInfo">
      <div className="card-info">
        <div className="card-post">
          <img src={`https://image.tmdb.org/t/p/original/${video.poster_path}`} alt={video.title}></img>
        </div>
        <div className="text-info">
          <h1 className="titlePag">{video.title}</h1>
          <p className="textView">{video.overview}</p>

          <div className="details">
            <p className="textView bold">Genêro:
              <span className="destaque">
                {video.genres.map((genre => genre.name)).join(', ')}
              </span>
            </p>
            <p className="textView bold">Data de lançamento: <span className="destaque">{video.release_date}</span></p>
            <p className="textView bold">Popularidade: <span className="destaque">{video.popularity}</span></p>
          </div>
          <div className="moreInfo">
            {/* {`iconX ${bars ? 'active' : ''}` */}
            <Button variant="primary" onClick={() => setShow(true)}>
              <i className="fa-solid fa-play"></i>Assista agora
            </Button>
            <span className="moreInfoSpan"><a href="http://maisDetalhes">Mais Detalhes</a></span>
          </div>
        </div>
      </div> 
    </div>
    <div className="modal-content">
      <Modal
        className="container-modal"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby={`video-${video.id}`}
      >
        <Modal.Body>
          <div className="container-video" id="videoContainer">
            <video width="800" className="video" controls>
              <source src={`https://onmation.com/assistirOnline/${video.title}`} type="video/mp4"/>
              <track kind="captions" src=""/*colocar link legenda*/></track>
            </video>
          </div> 
        </Modal.Body>
      </Modal>
    </div>
    {/* <Coments/> */}
  </div>
  )
}

export default PagPlay