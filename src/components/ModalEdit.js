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

class ModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
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
            <Button color="primary">Update Product</Button>{" "}
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
