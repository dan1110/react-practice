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
      imageUrl: "",
      name: "",
      description: "",
      modal: false,
      products: [],
    };
    this.updateProduct = this.updateProduct.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  updateProduct() {
    // console.log("say lala");
    // console.log(this.state.products);
    const { products } = this.state;

    // axios
    //   .get("https://5f60857c90cf8d0016557e14.mockapi.io/Studens")
    //   .then((res) => {
    //     this.setState({
    //       products: res.data,
    //     });
    //     products.map((product) => {
    //       return console.log(product.id);
    //     });
    //   });
    // this.setState({
    //     products: []
    // })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  onOpen(id) {
    axios
      .get("https://5f60857c90cf8d0016557e14.mockapi.io/Studens/" + id)
      .then((res) => {
        this.setState({
          imageUrl: res.data.imageUrl,
          name: res.data.name,
          description: res.data.description,
          modal: !this.state.modal,
        });
      });
  }

  render() {
    let { imageUrl, name, description } = this.state;
    return (
      <div>
        <Button color="info" onClick={() => this.onOpen(this.props.id)}>
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
                <Input type="text" name="url" id="imageUrl" value={imageUrl} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Name Product</Label>
                <Input type="" name="" id="titleCard" value={name}/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description Product</Label>
                <Input type="textarea" name="text" id="descriptionText" value={description}/>
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
