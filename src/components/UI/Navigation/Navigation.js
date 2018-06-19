import React, { Component } from "react";
import { Nav, Navbar, NavbarToggler, Collapse } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
        <Navbar expand="lg">
        <NavbarToggler onClick={this.toggleMenu}>
          <i className="fas fa-bars" />
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <RouterNavLink to="/">Home</RouterNavLink>
            <RouterNavLink to="/">Test</RouterNavLink>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
