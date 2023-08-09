import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Loginn from '../Components/Login';
import Sueldoss from '../Components/Sueldos';


function Menu() {

    return (
     
        <div className='App'>
            <></>
    
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand as={Link} to="">Mi UMG</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/Sueldos">Control de Sueldos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </div>
      
    );
}

export default Menu;