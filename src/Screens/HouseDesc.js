import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Container,
  Carousel,
} from "react-bootstrap";

const HouseDesc = () => {
  const images = [
    "https://engocha.com/wp-content/uploads/listing/house-for-sale-residential-house-for-sale-price-in-addis-ababa-Ethiopia_-_11-16-2018-_-1464-Engocha.jpg",
    "https://www.contemporist.com/wp-content/uploads/2017/11/modern-house-design-large-car-garage-031117-134-01-800x533.jpg",
  ];
  return (
    <Container>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={12} lg={6}>
          <Carousel interval={null}>
            {images.map((img) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ height: 350, backgroundSize: "cover" }}
                  src={img}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col md={12} lg={4}>
          <card>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <i className="fas fa-tags"></i> Price:
                  </Col>
                  <Col>
                    {" "}
                    <strong> PRICE </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col> Status:</Col>
                  <Col>Available</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <i className="fas fa-phone-alt"></i> Phone Number:
                  </Col>
                  <Col>PHONE NUMBER</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className="btn-block" type="button" variant="success">
                  Contact Seller
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </card>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <ListGroup varient="flush" className="mt-2 ">
            <ListGroup.Item className="text-center"></ListGroup.Item>
            <ListGroup.Item>Location: </ListGroup.Item>
            <ListGroup.Item>Square Meter: </ListGroup.Item>
            <ListGroup.Item>Bedroom: </ListGroup.Item>
            <ListGroup.Item>Bathroom: </ListGroup.Item>
            <ListGroup.Item>Kitchen: </ListGroup.Item>
            <ListGroup.Item>Garage </ListGroup.Item>
            <ListGroup.Item>Price: </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default HouseDesc;
