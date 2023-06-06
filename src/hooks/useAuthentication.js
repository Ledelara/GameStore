import app from '../firebase/config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import { useState, useEffect } from 'react';

export const useAuthentication = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if(cancelled) {
            return;
        }
    };

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName,
            });

            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if(error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter no mínimo 6 caracteres.";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado.";
            } else {
                systemErrorMessage = "Ocorreu um erro. Por favor, tente novamente mais tarde.";
            }

            setError(systemErrorMessage);
        };

        setLoading(false);
    };

    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    };

    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log("Usuário logado", data);
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            console.log(error.message.includes("user-not"));

            let systemErrorMessage;

            if(error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado.";
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta.";
            } else {
                systemErrorMessage = "Ocorreu um erro. Por favor, tente novamente mais tarde.";
            }

            console.log(systemErrorMessage);
            setError(systemErrorMessage);
        };

        console.log(error);
        setLoading(false);
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { 
        auth, createUser,
        error,
        logout,
        login,
        loading,
    };
};