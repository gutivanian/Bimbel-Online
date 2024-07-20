import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Videos: React.FC = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Contoh Video Pembelajaran Bimbel AZ</h2>
      <Row>
        <Col md={4}>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/samplevideo1" title="Biologi SMA"></iframe>
        </Col>
        <Col md={4}>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/samplevideo2" title="Ekonomi SMA"></iframe>
        </Col>
        <Col md={4}>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/samplevideo3" title="Matematika SMA"></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Videos;
