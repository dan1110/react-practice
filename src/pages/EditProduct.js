import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      name: "",
      description: "",
      items: {},
    };
  }
  onGetContent(item) {
    this.setState({
      item: item,
      imageUrl: item.imageUrl,
      name: item.name,
      description: item.description,
    });
  }
  render() {
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
                // onChange={(e) => this.handleChange(e, "imageUrl")}
                // value={imageUrl}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input
                type=""
                name=""
                id="titleCard"
                // onChange={(e) => this.handleChange(e, "name")}
                // value={name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input
                type="textarea"
                name="text"
                id="descriptionText"
                // onChange={(e) => this.handleChange(e, "description")}
                // value={description}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col lg="12">
          <Button color="primary">Update Product</Button>
          <Button color="danger" className=" ml-5">
            <Link className="text-white " to="/products/">
              Cancel
            </Link>
          </Button>
        </Col>
      </>
    );
  }
}

export default EditProduct;
