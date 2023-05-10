import { useState } from "react";

const useRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setErrorMessage("As senhas não são iguais.")
        } else {
            const user = { name, email, password };
            localStorage.setItem("user", JSON.stringify(user));
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setErrorMessage("");
            setSuccessMessage("Usuário cadastrado com sucesso! Faça login para continuar.");
        }
    };

    return {
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
    };
};

export default useRegister;