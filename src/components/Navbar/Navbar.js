import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <div className='navbar'>
        <h1>GameStore</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Cadastrar</NavLink>
        </nav>
    </div>
  )
}

export default Navbar