import ListAnime from "../../components/listAnime/ListAnime"

export const Animes = () => {
  return (
    <div className="main-container">
        <h1 className='title-pagName title'>Assistir Animes Online</h1>
        <div className="mainContainer">
          <ListAnime/>
        </div>
    </div>
  )
}

export default Animes