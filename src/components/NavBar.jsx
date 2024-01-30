import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {  Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >
      <Image src="../img/Logo.jpg" alt="Logo" style={{width: '20%'}}/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <LinkContainer to="/login">
          <Nav.Link >Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/panier">
          <Nav.Link >Panier</Nav.Link>
          </LinkContainer>

        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar