import "./Login.css";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Login(){

  const [Email, setEmail] = useState('')
  const [Senha, setSenha] = useState('')
  const navigate = useNavigate()

  const testePrevent= (e, s)=> {
    e.preventDefault('')
    setEmail("")
    
  }


  async function LogarUsuario(email, senha){
    
    await axios.get("http://localhost:3001/usuarios?email=" + email  + "&senha=" + senha) 
      .then(function (response){
        
        if (response.data.length > 0) {
          
          localStorage.setItem("nome",response.data[0].nome)
          localStorage.setItem("email",response.data[0].email)
          navigate('/Home')
                    
        }
      })
      .catch(function (error) {
       alert('usuario não tem cadastro')
      })
    };
    

  return (
    <main>
      <div className="container">
        <form onSubmit={testePrevent} method="get" className="item">
          <h1> Faça seu Login </h1>
          <label> E-mail:</label>
          <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
          <br />
          <label> Senha: </label>
          <input type="password" maxlength='16' required onChange={(s) => setSenha(s.target.value)}></input>
          <br />
          <button onClick={() => {LogarUsuario(Email, Senha)}}>Entrar</button>
          <br/>
          <br/>
          <div>
            <a href="http://localhost:3000/cadastro">Nao tem cadastro? cadastre-se </a>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
