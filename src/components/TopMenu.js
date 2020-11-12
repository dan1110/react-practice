import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/Cart";

const TopMenu = (props) => {
  return (
    <Nav className="d-flex justify-content-end">
      <NavItem>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/products/">Products</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <CartContext.Consumer>
            {({ cartItems }) => (
              <Link to="/products/">Card({cartItems.length})</Link>
            )}
          </CartContext.Consumer>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default TopMenu;
