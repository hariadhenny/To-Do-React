import "./List.css";
import Input from "../Input/Input";

function List(props) {
  return (
    <div className="listaDeTarefas">
      <ol>
        {props.listaCompleta.map((item, index) => {
          return (
            <div className="listaDeItem" key={index}>
              <input type="checkbox"></input>
              <label>{item}</label>
              <button onClick={() => props.removerItem(index)}>remover</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default List;
