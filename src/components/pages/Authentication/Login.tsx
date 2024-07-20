import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import './styles/Login.css';

const Login: React.FC = () => {
  return (
<div className='login-div'>
      <Container className="login-container">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="login-form">
            <h2>Sign In</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3 sign-button">
                Sign In
              </Button>
              <div className="text-center mt-3">
                <Button variant="danger" type="button" className="social-button">
                  <FaGoogle /> Sign in with Google
                </Button>
              </div>
              <div className="text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="text-center mt-2">
                <Link to="/register">Don't have an account? Register</Link>
              </div>
            </Form>
          </Col>
          <Col md={6} className="login-welcome">
            <div>
              <h2>Welcome to login</h2>
              <p>Don't have an account?</p>
              <Link to="/register">
                <Button variant="light" className="register-button">
                  Sign Up
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
</div>
  );
};

export default Login;
