import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/TryOut.css';
import NavigationBar from '../../Navbar';

const TryOut: React.FC = () => {
  const renderTryOutLinks = (title: string, path: string | null = null, count: number = 10) => {
    return [...Array(count)].map((_, index) => (
      <div key={index} className="tryout-item">
        {index === 0 && path ? (
          <Link to={path} className="tryout-link">
            {title} #{index + 1}
          </Link>
        ) : (
          <p>{`${title} #${index + 1}`}</p>
        )}
        <p>18 August 2023</p>
      </div>
    ));
  };

  return (
    <>
      <NavigationBar />
      <Container className="tryout-container">
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2>Try Out</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <Button className="w-100 tryout-btn">Try Out Saya</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <Button className="w-100 tryout-btn">Bundling UTBK 10 Try Out!</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <Button className="w-100 tryout-btn">Kalender TO</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Masukkan kode TO khusus..." />
              <Button variant="primary" className="input-group-append">Daftar</Button>
            </div>
          </Col>
        </Row>
        <h4 className="text-center mb-4">Butuh Tantangan? Ikuti Try Out ini!</h4>
        <Accordion>
          <Accordion.Item eventKey="utbk">
            <Accordion.Header>Tryout UTBK 2024</Accordion.Header>
            <Accordion.Body>
              <div className="tryout-section">
                {renderTryOutLinks('Tryout UTBK 2024 - SNBT', '/try-out/test')}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="mandiri">
            <Accordion.Header>Tryout Ujian Mandiri 2024</Accordion.Header>
            <Accordion.Body>
              <div className="tryout-section">
                {renderTryOutLinks('SIMAK UI', null)}
                {renderTryOutLinks('UTUL UGM', null)}
                {renderTryOutLinks('Mandiri ITB', null)}
                {renderTryOutLinks('Mandiri UNAIR', null)}
                {renderTryOutLinks('Mandiri ITS', null)}
                {renderTryOutLinks('Mandiri UNPAD', null)}
                {renderTryOutLinks('Mandiri UNDIP', null)}
                {renderTryOutLinks('Mandiri UNS', null)}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="kedinasan">
            <Accordion.Header>Tryout Seleksi Kedinasan 2024</Accordion.Header>
            <Accordion.Body>
              <div className="tryout-section">
                {renderTryOutLinks('STAN', null)}
                {renderTryOutLinks('STIS', null)}
                {renderTryOutLinks('STMKG', null)}
                {renderTryOutLinks('Poltek SSN', null)}
                {renderTryOutLinks('IPDN', null)}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="cpns">
            <Accordion.Header>Tryout Seleksi CPNS 2024</Accordion.Header>
            <Accordion.Body>
              <div className="tryout-section">
                {renderTryOutLinks('Seleksi CPNS 2024', null)}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="bumn">
            <Accordion.Header>Tryout Seleksi BUMN 2024</Accordion.Header>
            <Accordion.Body>
              <div className="tryout-section">
                {renderTryOutLinks('Seleksi BUMN 2024', null)}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default TryOut;
