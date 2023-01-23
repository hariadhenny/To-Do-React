import "./List.css";
import { FaTrashAlt } from "react-icons/fa";

function List(props) {
  return (
    <div className="container-pai">
      <ol>
        {props.listaCompleta.map((item, index) => {
          return (
            <div className="div-filho">
            <div className="listaDeItem" key={item.id}>
              <input type="checkbox"></input>
              <label>{item.tarefa}</label>
              <FaTrashAlt
                className="lixo"
                onClick={() => props.removerItem(item.id)}
              >
              </FaTrashAlt>
            </div>
            </div>
          );
        })}
      </ol>
      </div>
   
  );
}

export default List;
