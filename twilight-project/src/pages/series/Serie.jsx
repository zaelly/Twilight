import ListSerie from "../../components/listSerie/ListSerie"
import './index.css'

const Serie = () => {

  return (
    <div className="main-container">
         <h1 className='title-pagName title'>Assistir Series Online</h1>
      <div className="mainContainer">
        <ListSerie/>
      </div>
    </div>
  )
}

export default Serie