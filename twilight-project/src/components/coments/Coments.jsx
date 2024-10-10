import { useEffect, useState } from "react"
import './index.css'
// import axios from "axios";

const Coments = () => {

    const [coments, setComents] = useState("");
    const [comentsList, setComentsList] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    // const [data, setData] = useState([]);

    // const fetchData = async () =>{
    //     try{
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    //         setData(response.data);
    //     }catch(error){
    //         console.error(error);
    //     }
    // }

    // useEffect(()=>{
    //     fetchData();
    // }, []);

    function handleEnter(event) {
        if(event.key === 'Enter'){
            if (coments.trim()) { 
                setComentsList([...comentsList, coments]);
                setComents(""); 
            }
        }
    }

    function handleClick(){
        if (coments.trim()) {
            setComentsList([...comentsList, coments]);
            setComents("");
        }
    }

    function handleDelete(indexToDelete){
        const updatedList = comentsList.filter((_, index) => index !== indexToDelete);
        setComentsList(updatedList);
        console.log("Comentário removido com sucesso");
    }

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Alterna entre expandido e truncado
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-15">
                <div className="card">
                    <div className="areaText card">
                        <input 
                            type="text" 
                            className="textInput" 
                            name="textArea" 
                            id="textArea" 
                            value={coments} // Vincula o valor do input ao estado coments
                            onChange={(e) => setComents(e.target.value)} // Atualiza o estado ao digitar
                            onKeyUp={handleEnter} // Chama a função ao pressionar Enter
                        />
                        <label htmlFor="textArea" onClick={handleClick}>Enviar</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-15">
                <div className="card">
                    <div className="group-coments card">
                    {comentsList.length > 0 ? (
                                comentsList.map((coment, index) => (
                                    <div className="textCard" key={index}>
                                        {/* Clique para alternar entre texto truncado e completo */}
                                        <p
                                            onClick={() => toggleExpand(index)}
                                            className={expandedIndex === index ? "" : "truncated"}
                                        >
                                            {/* Se o comentário estiver expandido, exibe o texto completo. Caso contrário, exibe o truncado */}
                                            {expandedIndex === index 
                                                ? coment // Texto completo
                                                : coment.length > 30 
                                                    ? coment.substring(0, 80) + "..." // Texto truncado
                                                    : coment}
                                        </p>
                                        <i className="fa-solid fa-xmark" onClick={() => handleDelete(index)}></i>
                                    </div>
                                ))
                            ) : (
                                <p>Sem comentários</p>
                            )}
                            {/* deixar comentarios salvos em algum banco de dados */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coments