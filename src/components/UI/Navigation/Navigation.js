import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import classes from "./Navigation.css";
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
    return <Navbar className={classes.NavigationBar} expand="lg">
        <NavbarToggler className={classes.NavigationBarToggler} onClick={this.toggleMenu}>
          <i className="fas fa-bars" />
        </NavbarToggler>
        <NavbarBrand className={classes.NavigationBarBrand}>
          <RouterNavLink to="/">
            <img src={process.env.PUBLIC_URL + "/img/dota_logo.png"} alt="Dota 2 Logo" />
          </RouterNavLink>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <RouterNavLink className={classes.NavigationLink} to="/">
              Home
            </RouterNavLink>
            <RouterNavLink className={classes.NavigationLink}  to="/heroes">
              Heroes
            </RouterNavLink>
          </Nav>
        </Collapse>
      </Navbar>;
  }
}

export default Navigation;
