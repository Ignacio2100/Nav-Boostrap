import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function Menu() {

    return (
     
        <div className='App'>
            <></>
    
            <Navbar expand="lg" className="navbar">
                <Container>
                <Navbar.Brand as={Link} to="/">
                        <img
                            src="https://umg.edu.gt/miumg/sesion_files/logo_white.png"
                            alt="Mi UMG Logo"
                            className="d-inline-block align-top"
                            width="45"
                            height="30"
                        />{' '}
                        Mi UMG
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Sueldos">CONTROL DE SUELDOS</Nav.Link>
                            <Nav.Link as={Link} to="/Clientes">CLIENTES</Nav.Link>
                            <Nav.Link as={Link} to="/Producto">PRODUCTOS</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </div>
      
    );
}

export default Menu;