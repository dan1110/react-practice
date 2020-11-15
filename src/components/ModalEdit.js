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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  handleUpdate(id) {
    const { imageUrl, name, description } = this.state;
    let data = {
      id: id,
      imageUrl: imageUrl,
      name: name,
      description: description,
    }
    this.props.updateProduct(data)
    this.setState({
      modal: !this.state.modal,
    })
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
            <Button
              color="primary"
              onClick={() => this.handleUpdate(this.props.id)}
            >
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
