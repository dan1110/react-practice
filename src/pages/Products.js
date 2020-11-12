import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { CartContext } from "../contexts/Cart";
import ModalEdit from "../components/ModalEdit";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.onDeleteCard = this.onDeleteCard.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://5f60857c90cf8d0016557e14.mockapi.io/Studens")
      .then((res) => {
        this.setState({
          products: res.data,
        });
      });
  }

  onDeleteCard(_id) {
    axios
      .delete(`https://5f60857c90cf8d0016557e14.mockapi.io/Studens/${_id}`)
      .then((res) => {
        const items = this.state.products;
        const newProducts = items.filter((item) => item.id !== res.data.id);
        this.setState({
          products: newProducts,
        });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col sm="4" className="mt-4" key={product.id}>
                <Card>
                  <img
                    width="100%"
                    src={product.imageUrl}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <div className="d-flex justify-content-between">
                      <CartContext.Consumer>
                        {({ addToCart }) => (
                          <Button onClick={() => addToCart(product)}>
                            Add to cart
                          </Button>
                        )}
                      </CartContext.Consumer>
                      <ModalEdit id={product.id} />
                      <Button
                        className="btn-danger"
                        onClick={() => this.onDeleteCard(product.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
          <Col sm="4" className="mt-4">
            <Card
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "100%",
                fontSize: "25px",
                textTransform: "uppercase",
              }}
            >
              <Link to="/addProduct/">
                <div className="text-center">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <span>Add Product</span>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
