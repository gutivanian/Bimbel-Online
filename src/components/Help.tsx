import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Help.css';

const Help: React.FC = () => {
  return (
    <Container className="help-section my-4">
      <Row className="align-items-center text-center">
        <Col>
          <h2>Layanan Bantuan</h2>
          <p>
            Butuh bantuan? Tenang kamu bisa klik tombol dibawah untuk langsung menghubungi kami
          </p>
          <Button variant="primary" className="btn-help">Hubungi Sekarang</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Help;
