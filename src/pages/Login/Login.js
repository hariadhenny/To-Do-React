import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const testePrevent = (a, b, c) => {
    a.preventDefault();
    setNome("");
    b.preventDefault();
    setEmail("");
    c.preventDefault();
    setSenha("");
  };

  async function adicionarUsuario(nome, email, senha) {
    var emailExiste = false;

    await axios
      .get("http://localhost:3001/usuarios?email=" + email)
      .then(function (response) {
        if (response.data.length > 0) {
          emailExiste = true;
          alert("Este email já existe");
        }
      })
      .catch(function (error) {
        console.log("caiu no catch : " + error);
      });

    if (emailExiste == false) {
      await axios
        .post(
          "http://localhost:3001/usuarios",
          {
            nome: nome,
            email: email,
            senha: senha,
          },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((e) => {
          alert("Cadastro realizado com sucesso");
          setNome("");
          setEmail("");
          setSenha("");
        })
        .catch((erro) => {
          console.log(erro + "   catch");
        });
    }
  }

  return (
    <main>
      <div className="container">
        <form onSubmit={testePrevent} className="item">
          <h1> Faça seu cadastro </h1>
          <label> Nome:</label>
          <input
            value={nome}
            id="name"
            type="text"
            required
            onChange={(a) => setNome(a.target.value)}
          />
          <br />
          <label > E-mail:</label>
          <input
            value={email}
            id="email"
            type="email"
            required
            onChange={(b) => setEmail(b.target.value)}
          />
          <br />
          <label > Senha: </label>
          <input
            maxlength='16'
            value={senha}
            id="senha"
            type="password"
            required
            onChange={(c) => setSenha(c.target.value)}
          />
          <br />
          <button
            onClick={() => {
              adicionarUsuario(nome, email, senha);
            }}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
