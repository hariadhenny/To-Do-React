import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import "./DesenvolvidoPor.css";

function DesenvolvidoPor(){
    return(
    <div className='Desenvolvedor'>
         Desenvolvido por: Hariadhenny Vieira
        <a target="_blank" color='blue' href='https://www.linkedin.com/in/hariadhenny-vieira-003929164/'><ImLinkedin size={25}/></a>
        <a  target="_blank" href='https://github.com/hariadhenny' ><BsGithub size={25}/></a>

    </div>
    )
}

export default DesenvolvidoPor