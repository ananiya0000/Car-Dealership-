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

const CarDesc = () => {
  const images = [
    "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/legacy/nameplate/cars/20_FRD_MST_42360_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
    "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/legacy/nameplate/cars/20_FRD_MST_42360_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
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
            <ListGroup.Item className="text-center">
              <h3> NAME</h3>
            </ListGroup.Item>
            <ListGroup.Item>Brand: </ListGroup.Item>
            <ListGroup.Item>Transmission: </ListGroup.Item>
            <ListGroup.Item>Fuel: </ListGroup.Item>
            <ListGroup.Item>Condition: </ListGroup.Item>
            <ListGroup.Item>Milage: </ListGroup.Item>
            <ListGroup.Item>Description </ListGroup.Item>
            <ListGroup.Item>Negotiable: </ListGroup.Item>
            <ListGroup.Item>Year: </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CarDesc;
