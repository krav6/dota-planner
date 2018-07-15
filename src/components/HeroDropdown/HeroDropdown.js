import React, { Component } from "react";
import { Dropdown} from "reactstrap";

class HeroDropdown extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
      {this.props.children}
      </Dropdown>
    );
  }
}

export default HeroDropdown;
