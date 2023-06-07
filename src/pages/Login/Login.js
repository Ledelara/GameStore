import "./Login.css";

import { NavLink } from 'react-router-dom';

//Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password
    };

    const res = await login(user);
    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if(authError) {
      setError(authError);
    };
  }, [authError]);

  return (
    <div className="login-container">
        <h1>GameStore</h1>
        <p>Inicie uma sessão na <span>GameStore</span></p>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
            {!loading && <button>Entrar</button>}
            {loading && (
              <button>Aguarde...</button>
            )}
            {error && <p>{error}</p>}
        </form>
        <p>Não possui cadastro? <NavLink to='/register'>Registre-se</NavLink></p>
    </div>
  )
}

export default Login