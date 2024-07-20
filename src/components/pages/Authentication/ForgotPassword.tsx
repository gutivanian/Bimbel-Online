import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  return (
    <div className='forgot-password-div'>
      <Container className="forgot-password-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2>Forgot Password</h2>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3 reset-link">
                Send Reset Link
              </Button>
              <div className="text-center mt-3">
                <Link to="/login" className="text-link">Already have an account? Login</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgotPassword;
