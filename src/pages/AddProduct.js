import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      name: "",
      description: "",
      card: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  addProduct = (e) => {
    const { card, imageUrl, name, description } = this.state;
    e.preventDefault();
    // const newProduct = {
    //   imageUrl: imageUrl,
    //   name: name,
    //   description: description,
    // };
    // this.setState({
    //   card: [newProduct, ...card],
    // });
    axios
      .post("https://5f60857c90cf8d0016557e14.mockapi.io/Studens", {
        imageUrl: imageUrl,
        name: name,
        description: description,
      })
      .then((res) => {
        this.setState({
          imageUrl: "",
          name: "",
          description: "",
          card: [...card, res.data],
        });
      });
  };

  render() {
    const { card, imageUrl, name, description } = this.state;
    console.log(card);
    return (
      <>
        <Col lg="12">
          <Form>
            <FormGroup>
              <Label for="exampleUrl">Url Image</Label>
              <Input
                type="text"
                name="url"
                id="imageUrl"
                onChange={(e) => this.handleChange(e, "imageUrl")}
                value={imageUrl}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input
                type=""
                name=""
                id="titleCard"
                onChange={(e) => this.handleChange(e, "name")}
                value={name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input
                type="textarea"
                name="text"
                id="descriptionText"
                onChange={(e) => this.handleChange(e, "description")}
                value={description}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col lg="12">
          <Button onClick={this.addProduct}>Add Product</Button>
          <Button className=" btn-danger ml-5">
            <Link className="text-white " to="/products/">
              Cancel
            </Link>
          </Button>
        </Col>
      </>
    );
  }
}

export default AddProduct;
