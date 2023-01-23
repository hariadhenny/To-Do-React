import './NavBar.css'

function NavBar() {
  const nomeUsuarioLogado= localStorage.getItem('nome')

  return (
    <div className='Usuario'>
      <p> Usuario Logado: {nomeUsuarioLogado}</p>
    </div>
  );
}

export default NavBar;
