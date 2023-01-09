import './Input.css'
import React, { useState, useEffect} from "react";
import List from '../List/List';


function Input() {

    const [item, setItem] = useState('')
    const [itens, setItens] = useState([]);

    function addItem(item){
        setItens([...itens, item])
        
    }


    const testePrevent = (e)=>{
        e.preventDefault()
    }
    return(
        <> 
        <form className='campo' onSubmit={testePrevent}>
             <input onChange={(e)=>setItem(e.target.value)} placeholder='Digite uma tarefa'/>
             <button onClick={() => addItem(item)}>ok</button>
        </form>
        <List listaCompleta={itens}/>
        </>
      
       
    )   

}

export default Input;
