import './App.css';

//react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
