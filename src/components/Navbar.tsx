import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Bimbel AZ</Navbar.Brand> {/* Use Link for Brand */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link for navigation */}
            <Nav.Link as={Link} to="/packages">Paket Belajar</Nav.Link>
            <Nav.Link as={Link} to="/try">Try Out</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          <Form className="d-flex search-form">
            <FormControl
              type="search"
              placeholder="Mau belajar apa hari ini?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-button">
              <FaSearch />
            </Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Use Link for Login */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
