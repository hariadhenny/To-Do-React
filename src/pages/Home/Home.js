import DesenvolvidoPor from "../../components/DesenvolvidoPor/DesenvolvidoPor";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import './Home.css'


function Home() {
  
    return (
      <div className="styleHome">
        <NavBar/>
        <Header />
        <Input />
        <DesenvolvidoPor/>
      </div>
      
    );
  }
  
  export default Home;