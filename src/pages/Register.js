import "./Register.css";

//Hooks
import useRegister from "../hooks/useRegister";

const Register = () => {

  const {
    name,
    email,
    password,
    confirmPassword,
    errorMessage,
    successMessage,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleFormSubmit
  } = useRegister();

  return (
    <div className="register-container">
        <h2>Cadastrar</h2>
        <p>Não possui conta? Sem problemas! Cadastre-se de forma rápida e fácil.</p>
        <form onSubmit={handleFormSubmit}>
            <h3>Nome</h3>
            <input type="text" placeholder="Seu Nome" onChange={handleName} value={name} required/>
            <h3>E-mail</h3>
            <input type="email" placeholder="E-mail" onChange={handleEmail} value={email} required/>
            <h3>Senha</h3>
            <input type="password" placeholder="Senha" onChange={handlePassword} value={password} required/>
            <h3>Confirme a sua senha</h3>
            <input type="password" placeholder="Confirme sua senha" onChange={handleConfirmPassword} value={confirmPassword} required/>
            <input type="submit" placeholder="Cadastrar" className="submit"/>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  )
}

export default Register