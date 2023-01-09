import "./List.css";

function List(props) {
  
  function remover(index) {

   
  }

  return (
    <div className="listaDeTarefas">
      <ol>
        {props.listaCompleta.map((item, index) => {
          return (
            <div className="listaDeItem" key={index}>
              <input type="checkbox"></input>
              <label>{item}</label>
              <button onClick={() => remover(index)}>remover</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default List;
