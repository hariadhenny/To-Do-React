import DesenvolvidoPor from "../../components/DesenvolvidoPor/DesenvolvidoPor";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";


import './Home.css'


function Home() {
    return (
      <div className="styleHome">
        <Header />
        <Input />
        <DesenvolvidoPor/>
      </div>
    );
  }
  
  export default Home;