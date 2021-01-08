import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddCar() {
  //Text Input
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [negotiable, setNegotiable] = useState("Yes");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [milage, setMilage] = useState("");
  const [year, setYear] = useState("");
  const [transmission, setTransmission] = useState("Automatic");
  const [condition, setCondition] = useState("");
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
          <Form.Label> Car Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Toyota, Nissan...."
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Car Price</Form.Label>
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
          <Form.Label> Fuel</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bezine, Paterolem"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Car Milage</Form.Label>
          <Form.Control
            type="text"
            placeholder="overall milage"
            value={milage}
            onChange={(e) => setMilage(e.target.value)}
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
          <Form.Label> Manufactuaring Date(year)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label> Transmission</Form.Label>
          <Form.Control
            as="select"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option> Automatic</option>
            <option> Manual</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label> Condition</Form.Label>
          <Form.Control
            type="text"
            placeholder="What is the current condition of the car"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
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
            POST CAR
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddCar;
