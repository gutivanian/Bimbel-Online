import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/ComingSoon.css';

interface ComingSoonProps {
  show: boolean;
  handleClose: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Coming Soon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This feature is under development. Stay tuned!</p>
        <img src="https://via.placeholder.com/400" alt="Coming Soon" className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ComingSoon;
