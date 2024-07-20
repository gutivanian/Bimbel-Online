import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/ComingSoon.css';

const ComingSoon: React.FC = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Coming Soon</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img src="https://via.placeholder.com/300x200" alt="Coming Soon" className="img-fluid mb-3" />
        <p>This feature is still under development. Please check back later!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ComingSoon;
