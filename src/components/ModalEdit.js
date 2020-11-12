import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class ModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      products: [],
    };
    this.updateProduct = this.updateProduct.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  updateProduct() {
    // console.log("say lala");
    // console.log(this.state.products);
    const { products } = this.state;

    axios
      .get("https://5f60857c90cf8d0016557e14.mockapi.io/Studens")
      .then((res) => {
        this.setState({
          products: res.data,
        });
        products.map((product) => {
          return console.log(product.id);
        });
      });
    // this.setState({
    //     products: []
    // })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Name product</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleUrl">Url Image Product</Label>
                <Input type="text" name="url" id="imageUrl" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Name Product</Label>
                <Input type="" name="" id="titleCard" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description Product</Label>
                <Input type="textarea" name="text" id="descriptionText" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.updateProduct()}>
              Update Product
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalEdit;
