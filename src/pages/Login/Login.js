import "./Login.css";

//Hooks

const Login = () => {

  return (
    <div className="login-container">
        <h1>GameStore</h1>
        <p>Inicie uma sessão na <span>GameStore</span></p>
        <form >
            <input type="email" placeholder="E-mail" required/>
            <input type="password" placeholder="Senha" required/>
            <input type="submit" value="Entrar" className="submit"/>
        </form>
    </div>
  )
}

export default Login