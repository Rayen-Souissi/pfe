import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Import the CSS file

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/Home" className="navbar-brand">
          <span className="brand-text">𝕷𝖎𝖓𝖌𝖚𝖔 𝕬𝖓𝖆𝖑𝖞𝖘𝖊𝖗</span> {/* Replace with your desired text */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" exact="true" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/register" className="nav-link">
              <FontAwesomeIcon icon={faUser} />
              &nbsp; Register
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link">
              <FontAwesomeIcon icon={faUser} />
              &nbsp; Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
