import "./Input.css";
import React, { useState} from "react";
import List from "../List/List";


function Input() {
  const [item, setItem] = useState([]);
  const [itens, setItens] = useState([]);

  function addItem(item) {
    setItens([...itens, item]);
  }

  const testePrevent = (e) => {
    e.preventDefault();
    setItem("");
  };

  function removerItem(index) {
    let novo = [...itens];

    novo.splice(index, 1);
    setItens(novo);
    console.log("novo ", novo);
    console.log("index ", index);
    console.log("itens: ", itens);
  }

  return (
    <>
    <div className="campo">
      <form onSubmit={testePrevent}>
        <input
          onChange={(e) => setItem(e.target.value)}
          placeholder="Digite uma tarefa"
          value={item}
        />
        <button onClick={() => addItem(item)}>ok</button>
      </form>
      </div>
      <List listaCompleta={itens} removerItem={removerItem} />
    </>
  );
}

export default Input;
