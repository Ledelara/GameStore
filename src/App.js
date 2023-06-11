import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Firebase
import { onAuthStateChanged } from 'firebase/auth';

// hook
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthProvider } from './contexts/AuthContext';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';

const App = () => {

    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [auth]);

    if (loadingUser) {
        return <p>Carregando...</p>
    }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />
          <Route 
          path="/about"
          element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
    );
};

export default App;
