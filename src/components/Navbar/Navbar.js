import "./Navbar.css";

import { NavLink } from "react-router-dom";

// hook
import { useAuthentication } from "../../hooks/useAuthentication";

// context
import { useAuthValue } from "../../contexts/AuthContext";

const Navbar = () => {

  const {logout} = useAuthentication();
  const {user} = useAuthValue();

  return (
    <div className='navbar'>
        <h1>GameStore</h1>
        <ul>
          {!user && (
            <>
              <li>
                <NavLink to='/login'>Entrar</NavLink>
              </li>
              <li>
                <NavLink to='/register'>Cadastrar</NavLink>
              </li>
            </>
          )}
          {user && (
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
          )}
          {user && (
              <li>
                <NavLink to='/about'>Sobre</NavLink>
              </li>
          )}
          {user && (
            <li>
              <button className="btn-logout" onClick={logout}>Sair</button>
            </li>
          )}
        </ul>
    </div>
  )
}

export default Navbar