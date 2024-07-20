import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Daftar.css';

const Daftar: React.FC = () => {
  return (
    <Container className="daftar-section my-4">
      <Row className="align-items-center">
        <Col md={8}>
          <h2>Yuk Pilih Paket Belajarmu!</h2>
          <p>
            Buat akunmu sekarang dan belajar seru bareng Super Teacher Privat Al Faiz.
            Di Privat Al Faiz, belajar nyaman prestasi mengesankan.
          </p>
          <Button variant="primary" className="btn-daftar">Pilih Paket Belajar</Button>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <img
            src="https://via.placeholder.com/300" // Placeholder image URL, replace with actual image
            alt="Super Teacher"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Daftar;
