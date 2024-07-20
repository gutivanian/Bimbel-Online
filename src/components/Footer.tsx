import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white mt-4">
      <Container>
        <Row className="py-4">
          <Col md={4}>
            <h5>Bimbel AZ</h5>
            <p>Academic excellence and street-smart intelligence through groundbreaking insights and effective practices.</p>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="mr-2" /> Youtube
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="mr-2" /> TikTok
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>Tentang Kami</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Penggunaan</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
