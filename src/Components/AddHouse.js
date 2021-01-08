import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
// import db from "./Firebase";
// import firebase from "firebase";

function AddHouse() {
  const [kitchen, setKitchen] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [garage, setGarage] = useState("Yes");
  const [squareMeter, setSquareMeter] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [negotiable, setNegotiable] = useState("Yes");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subCity, setSubCity] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);
  const imageSelected = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      setSelectedImage((prevImage) => [
        ...prevImage,
        URL.createObjectURL(event.target.files[i]),
      ]);
    }
  };
  return (
    <Container>
      {selectedImage.map((image) => (
        <img src={image} width="100" height="100" style={{ marginRight: 10 }} />
      ))}
      <div style={{ marginTop: 10 }}>
        <label>
          <input
            type="file"
            multiple={true}
            onChange={imageSelected}
            accept="image/*"
          />
        </label>
      </div>
      <Form>
        <Form.Group>
          <Form.Label> House Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="In ETB"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Seller Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Addis Ababa, Hawassa"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Sub City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bole, Gerji"
            value={subCity}
            onChange={(e) => setSubCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Negotiable</Form.Label>
          <Form.Control
            as="select"
            value={negotiable}
            onChange={(e) => setNegotiable(e.target.value)}
          >
            <option> Yes</option>
            <option> No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label> Square Meter</Form.Label>
          <Form.Control
            type="text"
            placeholder="Year"
            value={squareMeter}
            onChange={(e) => setSquareMeter(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Bedroom</Form.Label>
          <Form.Control
            type="text"
            placeholder="W"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Bathroom </Form.Label>
          <Form.Control
            type="text"
            placeholder="W"
            value={bathroom}
            onChange={(e) => setBathroom(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> kitchen </Form.Label>
          <Form.Control
            type="text"
            placeholder="W"
            value={kitchen}
            onChange={(e) => setKitchen(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Garage</Form.Label>
          <Form.Control
            as="select"
            value={garage}
            onChange={(e) => setGarage(e.target.value)}
          >
            <option> Yes</option>
            <option> No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label> Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Describe the car"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <div className="text-center mt-2">
          <Button className="ml-md-5" variant="outline-secondary">
            POST HOUSE
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddHouse;
