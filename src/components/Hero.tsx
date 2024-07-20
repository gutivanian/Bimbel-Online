import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import '../styles/Hero.css';  // Assuming you will have a separate CSS file for specific styles

const Hero: React.FC = () => {
  return (
    <Container className="my-4 hero-container">
      <Carousel>
        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: `url(https://i0.wp.com/calmatters.org/wp-content/uploads/2020/12/online-learning.jpg?fit=2216%2C1276&ssl=1)` }}>
            <Carousel.Caption className='carousel-custom'>
              <h3>What We Have Done So Far</h3>
              <p>Lebih dari 46.000 videos + ratusan mind-blowing articles.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/009/435/567/small_2x/asian-young-woman-school-college-student-wear-headphones-learn-watching-online-webinar-webcast-class-looking-at-laptop-elearning-distance-course-or-calling-teacher-by-webcam-at-home-free-video.jpg)` }}>
            <Carousel.Caption className="caption-custom">
              <h1>Les Privat dan Bimbel untuk Siswa Nasional dan Internasional</h1>
              <p>Guru Sinotif membantu setiap siswa secara personal sesuai dengan kebutuhan dan target belajar siswa</p>
              <Button variant="primary" className="custom-button">DAPATKAN 1 kali Belajar GRATIS!</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: `url(https://burst.shopifycdn.com/photos/grad-students-throwing-hats-in-the-air.jpg?width=1000&format=pjpg&exif=0&iptc=0)` }}>
            <Carousel.Caption className="caption-custom">
              <h1>Welcome back to Bimbel AZ!</h1>
              <ul>
                <li>Video dan latihan soal lengkap</li>
                <li>Belajar pake konsep sampai paham</li>
                <li>Try out dengan sistem serupa ujian asli</li>
                <li>Dapat digunakan di PC maupun mobile</li>
              </ul>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: `url(https://www.dicsinnovatives.com/blog/wp-content/uploads/2024/05/computer-training-institute-delhi.jpg)` }}>
            <Carousel.Caption className="caption-custom">
              <h1>Persiapan Khusus Ujian PTN, Kedinasan dan Olimpiade</h1>
              <ul>
                <li>Materi terstruktur dan latihan soal intensif.</li>
                <li>Bimbingan dari tutor berpengalaman.</li>
                <li>Persiapan ujian kedinasan.</li>
                <li>Program olimpiade SMP dan SMA.</li>
                <li>Simulasi ujian mendalam.</li>
              </ul>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Hero;
