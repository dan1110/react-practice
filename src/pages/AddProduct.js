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
    this.handleAddProduct = this.handleAddProduct.bind(this);
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

  handleAddProduct() {
    const { imageUrl, name, description } = this.state;
    let data = {
      imageUrl: imageUrl,
      name: name,
      description: description,
    }
    this.props.addProduct(data)
    this.setState({
      imageUrl: "",
      name: "",
      description: "",
      modal: !this.state.modal,
    });
  }

  render() {
    const { imageUrl, name, description } = this.state;
    return (
      <>
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
            <Button onClick={this.handleAddProduct}>Add Product</Button>{" "}
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default AddProduct;
