import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import "./DesenvolvidoPor.css";

function DesenvolvidoPor(){
    return(
    <div className='Desenvolvedor'>
         Desenvolvido por: Hariadhenny Vieira
        <a target="_blank" color='blue' href='https://www.linkedin.com/in/hariadhenny-vieira-003929164/'><ImLinkedin/></a>
        <a  target="_blank" href='https://github.com/hariadhenny' ><BsGithub/></a>

    </div>
    )
}

export default DesenvolvidoPor