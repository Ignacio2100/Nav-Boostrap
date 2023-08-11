import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Sueldos from './Components/Sueldos';
import Clientes from './Components/Clientes';
import Producto from './Components/Productos';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Menu />
                <Routes>
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Sueldos' element={<Sueldos />} />
                    <Route path='/Clientes' element={<Clientes />} />
                    <Route path='/Producto' element={<Producto />} />
                    
                </Routes>
            </div>
        </BrowserRouter>
        
    );

  
}

export default App;