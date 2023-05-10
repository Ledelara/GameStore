import { useState } from "react";

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.email === email && user.password === password) {
            setErrorMessage("");
            alert("Login bem-sucedido!");
        } else {
            setErrorMessage("E-mail ou senha incorretos.");
        }
    };

    return {
        email,
        password,
        errorMessage,
        handleEmail,
        handlePassword,
        handleFormSubmit,
    };
};

export default useLogin;