import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../../Navbar'; // Make sure the path to your Navbar component is correct
import './styles/Products.css';

const packages = [
  {
    title: "STAN - Super",
    features: [
      "Pretest & Posttest",
      "80+ Video Materi SKD, dan 60+ Video Materi TPS",
      "5 Paket Try Out SKD dan TPS",
      "Grup Diskusi Whatsapp",
      "Event Tryout dan Webinar Nasional",
      "SiapUjian",
      "Analisis Pembelajaran",
      "Tanpa Buku (Hanya 40.000 tambah buku)"
    ],
    price: "Rp. 429.000",
    originalPrice: "Rp. 1.000.000",
    promo: "PROMO !!!",
    buttons: ["Gabung Kelas", "Diskusi"]
  },
  {
    title: "STAN - Expert",
    features: [
      "Pretest & Posttest",
      "80+ Video Materi SKD, dan 60+ Video Materi TPS",
      "10 Video Kesehatan & Kebugaran dan Wawancara",
      "20 Paket Try Out",
      "Live Class via Zoom (2x per Minggu)",
      "Grup Diskusi Whatsapp",
      "Kelas Latihan Google Classroom",
      "Konsultasi Umum",
      "Akses Tanya Soal ke Pengajar (Dibalas max 2×24 jam)",
      "Neocology",
      "Neocopedia",
      "Event Tryout dan Webinar Nasional",
      "SiapUjian",
      "Analisis Pembelajaran",
      "Tanpa Buku (Hanya 30.000 tambah buku)"
    ],
    price: "Rp. 549.000",
    originalPrice: "Rp. 1.500.000",
    promo: "PROMO !!!",
    buttons: ["Gabung Kelas", "Diskusi"]
  },
  {
    title: "STAN - Maestro",
    features: [
      "Pretest & Posttest",
      "80+ Video Materi SKD, dan 60+ Video Materi TPS",
      "10 Video Kesehatan & Kebugaran dan Wawancara",
      "30 Paket Try Out",
      "Live Class via Zoom (2x per Minggu)",
      "Grup Diskusi Whatsapp",
      "Kelas Latihan Google Classroom",
      "Konsultasi Umum",
      "Akses Tanya Soal ke Pengajar (Dibalas max 2×24 jam)",
      "Neocology",
      "Neocopedia",
      "Event Tryout dan Webinar Nasional",
      "SiapUjian",
      "Analisis Pembelajaran",
      "Tanpa Buku (Hanya 30.000 tambah buku)",
      "Master Teacher",
      "Program Kelas Review",
      "(Bonus) Extra Tryout",
      "Bonus Buku"
    ],
    price: "Rp. 634.000",
    originalPrice: "Rp. 1.999.000",
    promo: "GARANSI BIMBEL GRATIS TAHUN DEPAN",
    buttons: ["Gabung Kelas", "Diskusi"]
  },
  {
    title: "STAN - Perfecto",
    features: [
      "Pretest & Posttest",
      "80+ Video Materi SKD, dan 60+ Video Materi TPS",
      "10 Video Kesehatan & Kebugaran dan Wawancara",
      "40+ Paket Try Out",
      "Live Class via Zoom (2x per Minggu)",
      "Grup Diskusi Whatsapp",
      "Kelas Latihan Google Classroom",
      "Konsultasi Umum",
      "Akses Tanya Soal ke Pengajar (Dibalas max 1×24 jam)",
      "Neocology",
      "Neocopedia",
      "Event Tryout dan Webinar Nasional",
      "SiapUjian",
      "Analisis Pembelajaran",
      "Kelas Review",
      "(Bonus) Extra Tryout",
      "Bonus Buku",
      "GARANSI UANG KEMBALI 80% + BIMBEL GRATIS TAHUN DEPAN"
    ],
    price: "Rp. 734.000",
    originalPrice: "Rp. 2.499.000",
    promo: "PROMO !!!",
    buttons: ["Gabung Kelas", "Diskusi"]
  }
];

const Products: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Container className="products-container">
        <h2 className="text-center mb-4">Produk Bimbel AZ</h2>
        <p className="text-center">Bimbel AZ menyediakan semua amunisi yang kamu butuhkan untuk menuju kampus impianmu!</p>
        <Row className="justify-content-center mb-4">
          <Col md={12} className="text-center">
            <Button className="filter-btn">STAN</Button>
            <Button className="filter-btn">STIS</Button>
            <Button className="filter-btn">UTBK</Button>
            <Button className="filter-btn">IPDN</Button>
            <Button className="filter-btn">KEMENHUB</Button>
            <Button className="filter-btn">POLTEKIM/POLTEKIP</Button>
            <Button className="filter-btn">STIN</Button>
            <Button className="filter-btn">STMKG</Button>
            <Button className="filter-btn">SSN</Button>
            <Button className="filter-btn">AKPOL</Button>
            <Button className="filter-btn">AKMIL</Button>
            <Button className="filter-btn">SIAPUJIAN</Button>
          </Col>
        </Row>
        <h4 className="text-center mb-4">PAKET BIMBEL STAN</h4>
        <Row>
          {packages.map((pkg, idx) => (
            <Col md={3} key={idx}>
              <Card className="product-card mb-4">
                <Card.Body>
                  <Card.Title>{pkg.title}</Card.Title>
                  <ul className="features-list">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="pricing">
                    <span className="original-price">{pkg.originalPrice}</span>
                    <span className="promo">{pkg.promo}</span>
                    <span className="price">{pkg.price}</span>
                  </div>
                  <div className="buttons">
                    {pkg.buttons.map((btn, bIdx) => (
                      <Button key={bIdx} className="product-btn">
                        {btn}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Products;
