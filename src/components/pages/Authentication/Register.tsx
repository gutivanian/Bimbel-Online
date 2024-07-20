import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import './styles/Register.css';

const Register: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (!validatePassword(form.password)) {
      alert('Password must be at least 8 characters long and include both letters and numbers.');
      return;
    }
    if (!termsChecked) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    // Handle form submission
  };

  return (
    <div className='register-div'>
      <Container className="register-container">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="register-welcome">
            <div>
              <h2>Join Us</h2>
              <p>Already have an account?</p>
              <Link to="/login">
                <Button variant="light" className="login-button">
                  Login
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={6} className="register-form">
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFullName">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleInputChange}
                  placeholder="Nama Lengkap"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <div className="password-wrapper">
                  <Form.Control
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                  />
                  <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>
              <Form.Group controlId="formTerms">
                <Form.Check
                  type="checkbox"
                  label="Saya menyetujui Syarat Ketentuan dan Kebijakan Privasi"
                  checked={termsChecked}
                  onChange={(e) => setTermsChecked(e.target.checked)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3 register-button">
                Daftar
              </Button>
              <div className="text-center mt-3">
                <Button variant="danger" type="button" className="social-button">
                  <FaGoogle /> Daftar dengan Google
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
