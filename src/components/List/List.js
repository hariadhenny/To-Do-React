import "./List.css";
import { FaTrashAlt } from "react-icons/fa";

function List(props) {
  return (
    <div className="listaDeTarefas">
      <ol>
        {props.listaCompleta.map((item, index) => {
          return (
            <div className="listaDeItem" key={index}>
              <input type="checkbox"></input>
              <label>{item}</label>
              <FaTrashAlt className="lixo" onClick={() => props.removerItem(index)}>remover</FaTrashAlt>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default List;
