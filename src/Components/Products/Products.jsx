import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";

const products = [
  {
    id: 1,
    name: "छत्रपती शिवाजी महाराज",
    image: p2,
    price: "₹3,499",
    description: "A handcrafted murti of Chhatrapati Shivaji Maharaj...",
  },
  {
    id: 2,
    name: "गुर्जदार मावळा",
    image: p3,
    price: "₹2,499",
    description: "A finely crafted Mavala figurine honoring warriors...",
  },
  {
    id: 3,
    name: "महाराणा प्रताप जी",
    image: p1,
    price: "₹7,999",
    description: "Maharana Pratap handcrafted artifacts...",
  },
  {
    id: 4,
    name: "छत्रपती शिवाजी महाराज",
    image: p4,
    price: "₹5,499",
    description: "A handcrafted murti of Chhatrapati Shivaji Maharaj...",
  },
];

const Product = () => {
  const navigate = useNavigate();

  return (
    <div className="heritage-product-section">
      <Container className="mt-5">
        {/* Section Title */}
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="heritage-product-title">Timeless Artifacts</h1>
            <p className="heritage-product-subtitle">
              Reliving History Through Every Creation
            </p>
          </Col>
        </Row>

        {/* Product Cards */}
        <Row>
          {products.map((product) => (
            <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="heritage-product-card">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="heritage-product-image"
                />
                <Card.Body className="text-center">
                  <Card.Title className="heritage-product-name">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="heritage-product-description">
                    {product.description}
                  </Card.Text>
                  <span className="heritage-product-price">
                    {product.price}
                  </span>
                  <Button variant="dark" className="heritage-buy-button mt-3">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* See More Button */}
        <div className="text-center mt-4">
          <Button variant="outline-dark" onClick={() => navigate("/products")}>
            See More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Product;
