import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Sueldos from './Components/Sueldos';
import Clientes from './Components/Clientes';
import Producto from './Components/Productos';
import Home from './Components/Home';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (

        <BrowserRouter>
            <div className='App'>

                {isLoggedIn ? (
                    <>
                      <Menu/>
                        <Routes>
                            <>
                                <Route path='/Sueldos' element={<Sueldos />} />
                                <Route path='/Clientes' element={<Clientes />} />
                                <Route path='/Producto' element={<Producto />} />
                                <Route path='/' element={<Home />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </>

                        </Routes>
                    </>
                ) : (

                    <Routes>
                        <>
                           
                            <Route path='/' element={<Login Abrir={handleLogin}/>} />
                            <Route path="*" element={<Navigate to="/" />} />

                        </>

                    </Routes>


                )}

            </div>
        </BrowserRouter>
    );
}

export default App;
