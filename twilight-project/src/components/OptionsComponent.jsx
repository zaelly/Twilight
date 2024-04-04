import './OptionsComponen.css'

const GendersViews = () => {
  return (
    <div id='options' className='options-container'> 
        <select className="custom-select seta">
            <option value="todos">Todos </option> 
            <option value="1">Animação</option>
            <option value="2">Familía</option>
            <option value="3">Terror</option>
            <option value="4">Comédia</option>
            <option value="5">Drama</option>
            <option value="6">Ação</option>
            <option value="7">Suspense</option>
            <option value="8">Guerra</option>
            <option value="9">Romance</option>
            <option value="10">Mistério</option>
            <option value="11">Fantasia</option>
            <option value="12">Musical</option>
            <option value="13">Documentário</option>
            <option value="14">Faroeste</option>
            <option value="15">Crime</option>
            <option value="16">Aventura</option>
            <option value="17">LGBTQ+</option>
        </select>            
    </div>
  )
}

export default GendersViews