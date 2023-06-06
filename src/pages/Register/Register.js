import React, {useState, useEffect} from 'react';
import "./Register.css";

//Hooks
import {useAuthentication} from '../../hooks/useAuthentication';

const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    };

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="register-container">
        <h2>Cadastrar</h2>
        <p>Não possui conta? Sem problemas! Cadastre-se de forma rápida e fácil.</p>
        <form onSubmit={handleSubmit}>
            <h3>Nome</h3>
            <input type="text" placeholder="Seu Nome" onChange={(e) => setDisplayName(e.target.value)} value={displayName} required/>
            <h3>E-mail</h3>
            <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
            <h3>Senha</h3>
            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
            <h3>Confirme a sua senha</h3>
            <input type="password" placeholder="Confirme sua senha" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required/>
            <button>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register