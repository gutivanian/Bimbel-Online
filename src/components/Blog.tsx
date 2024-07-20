import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Blog.css';  // Assuming you will have a separate CSS file for specific styles

const Blog: React.FC = () => {
  const blogs = [
    {
      title: 'Bimbel AZ Guide',
      image: 'https://via.placeholder.com/150', // Placeholder image URL, replace with actual image
      text: 'Kumpulan artikel yang berisi panduan dan tips belajar yang berisi panduan dan tips belajar...',
      url: '#', // Replace with actual blog URL
    },
    {
      title: 'Bimbel AZ Insights',
      image: 'https://via.placeholder.com/150', // Placeholder image URL, replace with actual image
      text: 'Berisi kumpulan artikel Bimbel AZ yang paling keren...',
      url: '#', // Replace with actual blog URL
    },
    {
      title: 'Bimbel AZ Info',
      image: 'https://via.placeholder.com/150', // Placeholder image URL, replace with actual image
      text: 'Berisi kumpulan artikel seputar update dari program-program Bimbel AZ...',
      url: '#', // Replace with actual blog URL
    }
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">AZ Blog</h2>
      <Row>
        {blogs.map((blog, index) => (
          <Col md={4} key={index}>
            <Card className="blog-card h-100">
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                  {blog.text.length > 100 ? `${blog.text.substring(0, 100)}...` : blog.text}
                </Card.Text>
                <Button variant="link" href={blog.url} target="_blank">
                  Show More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
