import "./Input.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import List from "../List/List";

function Input() {
  const [item, setItem] = useState([]);
  const [itens, setItens] = useState([]);
  const emailUsuarioLogado = localStorage.getItem("email");
  const trava = 0;

  async function addItem(item, emailUsuarioLogado) {
    if(item == ''){
      return(
        alert("digite uma tarefa")
      )
    }
    await axios
      .post(
        "http://localhost:3001/tarefas",
        {
          tarefa: item,
          email: emailUsuarioLogado,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((e) => {
        alert("tarefa adicionada com sucesso");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }

  async function removerItem(id) {
    await axios
      .delete("http://localhost:3001/tarefas/" + id)
      .then(
        (response) => {
          window.location.reload(true);
          console.log("Caiu no then, response: " + response);
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .catch((error) => {
        console.log("Caiu no Cath, error: " + error);
      });
  }

  useEffect(() => {
    async function buscarLista() {
      await axios
        .get("http://localhost:3001/tarefas?email=" + emailUsuarioLogado)
        .then((response) => {
          let dados = response.data;
          let tarefa = [];

          dados.map((element) => {
            console.log(element);
            tarefa.push({ tarefa: element.tarefa, id: element.id });
          });

          setItens(tarefa);
        })
        .catch((error) => {
          console.log("o erro foi: ", error);
        });
    }

    buscarLista();
  }, [trava]);

  return (
    <>
      <div className="campo">
        <form>
          <input
            onChange={(e) => setItem(e.target.value)}
            placeholder="Digite uma tarefa"
            value={item}
            maxLength="30"
          />
          <button onClick={() => addItem(item, emailUsuarioLogado)}>ok</button>
        </form>
      </div>
      <List listaCompleta={itens} removerItem={removerItem} />
    </>
  );
}

export default Input;
