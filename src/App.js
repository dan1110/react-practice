import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import { CartProvider } from "./contexts/Cart";

const Index = () => <h2>Home</h2>;
// const Products = () => <h2>Products</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <Container>
          <Row>
            <Col>
              <NavbarBrand href="/">LOGO</NavbarBrand>
            </Col>
            <Col>
              <TopMenu />
            </Col>
          </Row>
          <Row>
            <Route path="/" exact component={Index}></Route>
            <Route path="/products/" component={Products}></Route>
            <Route path="/addproduct/" component={AddProduct}></Route>
            <Route path="/editproduct/" component={EditProduct}></Route>
          </Row>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
