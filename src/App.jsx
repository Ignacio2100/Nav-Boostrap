import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Loginn from './Components/Login';
import Sueldoss from './Components/Sueldos';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Menu />
                <Routes>
                    <Route path='/Login' element={<Loginn />} />
                    <Route path='/Sueldos' element={<Sueldoss />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;