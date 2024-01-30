import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdLocalOffer } from "react-icons/md";
import { LinkContainer } from 'react-router-bootstrap';

const TopBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
        <h6 className='text-light'>
            <MdLocalOffer className='text-warning'/> Livraison gratuite pour toute commande supérieur à 50 euros 
        </h6>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <LinkContainer to="/" activeClassName=''>
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="Contact" activeClassName=''>
          <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="About" activeClassName=''>
          <Nav.Link>A propos</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default TopBar