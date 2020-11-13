import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  // Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { Link } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      name: "",
      description: "",
      card: [],
      modal: false,
      fade: false,
      product: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
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
          modal: !this.state.modal,
          product: res.data,
        });
      });
  };

  render() {
    const { imageUrl, name, description } = this.state;
    return (
      <>
        {/* <Col lg="12">
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
        </Col> */}

        {/* <Button color="info">New Product</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New product</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleUrl">Url Image Product</Label>
                <Input
                  type="text"
                  name="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => this.handleChange(e, "imageUrl")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Name Product</Label>
                <Input
                  type=""
                  name=""
                  id="titleCard"
                  value={name}
                  onChange={(e) => this.handleChange(e, "name")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description Product</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="descriptionText"
                  value={description}
                  onChange={(e) => this.handleChange(e, "description")}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addProduct}>
              Update Product
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}

        <Button color="danger" onClick={this.toggle}>
          New Product
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={this.state.fade}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add New Product</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="imageUrl">Url Image Product</Label>
                <Input
                  type="text"
                  name="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => this.handleChange(e, "imageUrl")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="titleCard">Name Product</Label>
                <Input
                  type=""
                  name=""
                  id="titleCard"
                  value={name}
                  onChange={(e) => this.handleChange(e, "name")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="descriptionText">Description Product</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="descriptionText"
                  value={description}
                  onChange={(e) => this.handleChange(e, "description")}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.addProduct}>Add Product</Button>{" "}
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default AddProduct;
