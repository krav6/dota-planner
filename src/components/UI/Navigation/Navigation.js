import React, { Component } from "react";
import { Navbar } from "reactstrap";
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
    return (
      <Navbar className={classes.NavigationBar} expand="lg">
        <RouterNavLink to="/" className={classes.NavigationBarBrand}>
          <img
            src={process.env.PUBLIC_URL + "/img/dota_logo.png"}
            alt="Dota 2 Logo"
          />
        </RouterNavLink>
      </Navbar>
    );
  }
}

export default Navigation;
