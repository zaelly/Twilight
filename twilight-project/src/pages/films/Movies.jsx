import ListMovie from "../../components/listMovies/ListMovie"
import './index.css'

const Movies = () => {

  return (
    <div className="main-container">
         <h1 className='title-pagName title'>Assistir Filmes Online</h1>
      <div className="mainContainer">
        <ListMovie/>
      </div>
    </div>
  )
}

export default Movies