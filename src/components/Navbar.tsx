import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ComingSoon from './ComingSoon'; // Import the ComingSoon component
import '../styles/NavigationBar.css';

const NavigationBar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Bimbel AZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Paket Belajar</Nav.Link>
              <Nav.Link as={Link} to="/try-out">Try Out</Nav.Link>
              <Nav.Link onClick={handleShowModal}>Blog</Nav.Link> {/* Trigger the modal */}
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
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showModal && <ComingSoon show={showModal} handleClose={handleCloseModal} />} {/* Conditionally render modal */}
    </>
  );
}

export default NavigationBar;
