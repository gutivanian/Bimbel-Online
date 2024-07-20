import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import '../styles/Testimonials.css';  // Assuming you will have a separate CSS file for specific styles

const Testimonials: React.FC = () => {
  const [showMore, setShowMore] = useState([false, false, false]);

  const toggleShowMore = (index: number) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  const testimonials = [
    {
      name: 'Carissa Vania',
      university: 'Kedokteran - Universitas Padjajaran',
      image: 'https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg',
      text: 'Belajar sama zenius bikin gue sadar kalo belajar itu ngga susah dan ngga bosenin. Kuncinya ada di cara penyampaian yang asik dan mudah dimengerti.'
    },
    {
      name: 'Nathania Vivian',
      university: 'Hubungan Internasional - Universitas Gadjah Mada',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJzJUCo-RpJB0V8hJcNhjHSbddEkvk5hZJw&s',
      text: 'Berbagai materi di zenius disampaikan dengan sangat baik dan menyenangkan. Aku jadi lebih paham dan siap menghadapi ujian.'
    },
    {
      name: 'M. Syahman Sahman',
      university: 'Fakultas Matematika dan IPA - Institut Teknologi Bandung',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiITnt1U2ZN6txckfnjmJxkBws2t7C8mx8fg&s',
      text: 'Dengan zenius, aku bisa belajar di mana saja dan kapan saja. Materinya lengkap dan sangat membantu untuk persiapan ujian.'
    }
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Apa Kata Mereka?</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index}>
            <Card className="testimonial-card">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <div className="ms-3">
                    <Card.Title>{testimonial.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{testimonial.university}</Card.Subtitle>
                  </div>
                </div>
                <Card.Text>
                  {showMore[index] ? testimonial.text : `${testimonial.text.substring(0, 100)}...`}
                </Card.Text>
                <Button variant="link" className="toggle-button" onClick={() => toggleShowMore(index)}>
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="primary" href="#" target="_blank" className="more-button">Cek Kata Siswa Lain Yuk</Button>
      </div>
    </Container>
  );
}

export default Testimonials;
