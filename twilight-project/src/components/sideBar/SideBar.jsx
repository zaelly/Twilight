import '/.sideBar.css';

const sideBar = () => {
  return (
    <div>
        <span></span>
        ${if(!login){
            // nao tiver login, vai aparecer para o user fazer login ou criar conta
        }else{
            // se ja estiver login, vai aparecer os favoritos, salvos, config conta, assistir dps
        }}
    </div>
  )
}

export default sideBar