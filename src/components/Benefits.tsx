import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Benefits.css';  // Assuming you will have a separate CSS file for specific styles

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Live Classs',
      image: 'https://img.icons8.com/ios/452/class.png', // Placeholder image URL, replace with actual image
      description: `Bimbel CPNS yang dilengkapi fitur LIVE CLASS untuk bimbingan belajar secara intensif
                    Dibawakan oleh Tentor yang berpengalaman & Profesional
                    jadwal LIVE CLASS akan dilakukan secara intensif dan semakin intensif ketika mendekati tes CPNS
                    Tersedia Rekaman LIVE CLASS untuk kamu yang ketinggalan siaran LIVE CLASS sebelumnya
                    Bisa join di aplikasi jadiasn atau web app.jadi.asn.id > menu live class`,
      linkText: 'Contoh Tutor Terbaik CPNS',
      linkUrl: '#',
    },
    {
      title: 'Simulasi Tryout',
      image: 'https://img.icons8.com/ios/452/test.png', // Placeholder image URL, replace with actual image
      description: `Bimbel CPNS yang sudah menyesuaikan soal-soal dengan kisi-kisi terbaru
                    Dilengkapi dengan fitur-fitur terbaik & unjulan yang sudah terbukti membantu para member JadiASN sebelumnya dalam berlatih soal CPNS
                    Bisa mengikuti Simulasi Tryout untuk latihan soal berkelanjutan`,
      linkText: 'Dilengkapi dengan fitur lengkap:',
      linkUrl: '#',
    },
    {
      title: 'Latsol (Latihan Soal)',
      image: 'https://img.icons8.com/ios/452/exam.png', // Placeholder image URL, replace with actual image
      description: `Bimbel CPNS yang melatih para member untuk konsisten latihan soal dengan mudah dan singkat
                    Cocok untuk kamu yang sibuk & mempunyai waktu yang singkat, cukup meluangkan waktu 10 menit setiap hari saja untuk mengerjakannya
                    Bisa menonton Latsol untuk latihan soal berkelanjutan`,
      linkText: 'Dilengkapi dengan fitur lengkap:',
      linkUrl: '#',
    },
    {
      title: 'Materi',
      image: 'https://img.icons8.com/ios/452/book.png', // Placeholder image URL, replace with actual image
      description: `Bimbel CPNS yang dilengkapi Modul/Materi dalam bentuk video untuk kamu yang gampang ngantuk kalau belajar menggunakan teks bacaan
                    Dengan pembahasan soal yang mudah dimengerti dan menggunakan metode cepat menjawab soal`,
      linkText: 'Contoh Live Class',
      linkUrl: '#',
    },
    {
      title: 'Grup Diskusi dan Belajar',
      image: 'https://img.icons8.com/?size=100&id=3734&format=png&color=000000', // New image URL
      description: `Bimbel CPNS yang menyediakan wadah diskusi untuk para member secara terbuka dan edukasi fitur-fitur terbaik di JadiASN yang bisa dimaksimalkan
                    Akan ada informasi-informasi terbaru & menarik seputar CPNS`,
      linkText: 'Contoh Diskusi Grup',
      linkUrl: '#',
    },
    {
      title: 'Konsultasi Personal',
      image: 'https://img.icons8.com/ios/452/consultation.png', // Placeholder image URL, replace with actual image
      description: `Bimbel CPNS yang menyediakan sesi konsultasi personal dengan tutor untuk membahas kesulitan dan strategi belajar
                    Sesi ini bertujuan untuk memberikan panduan belajar yang sesuai dengan kebutuhan dan target masing-masing siswa`,
      linkText: 'Lihat Jadwal Konsultasi',
      linkUrl: '#',
    }
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Keuntungan Bimbel JadiASN</h2>
      <p className="text-center mb-5">JadiASN adalah Lembaga Bimbingan Belajar CPNS Terbaik Untuk Persiapan Rekrutmen Tes CPNS</p>
      <Row>
        {benefits.map((benefit, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="benefit-card h-100">
              <Card.Body>
                <div className="text-center">
                  <img src={benefit.image} alt={benefit.title} className="benefit-image mb-3" />
                </div>
                <Card.Title className="text-center">{benefit.title}</Card.Title>
                <Card.Text>{benefit.description}</Card.Text>
                <a href={benefit.linkUrl} className="stretched-link">{benefit.linkText}</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Benefits;
