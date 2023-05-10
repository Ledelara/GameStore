import "./Login.css";

//Hooks
import useLogin from "../hooks/useLogin";

const Login = () => {

  const {
    email,
    password,
    errorMessage,
    handleEmail,
    handlePassword,
    handleFormSubmit,
  } = useLogin();

  return (
    <div className="login-container">
        <h1>GameStore</h1>
        <p>Inicie uma sessão na <span>GameStore</span></p>
        <form onSubmit={handleFormSubmit}>
            <input type="email" placeholder="E-mail" value={email} onChange={handleEmail} required/>
            <input type="password" placeholder="Senha" value={password} onChange={handlePassword} required/>
            <input type="submit" value="Entrar" className="submit"/>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  )
}

export default Login