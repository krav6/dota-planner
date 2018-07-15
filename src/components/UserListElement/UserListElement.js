import React, { Component } from "react";
import { Collapse } from "reactstrap";

import HeroIcons from "../HeroIcons/HeroIcons";
import classes from "./UserListElement.css";
import UserListDropdown from '../HeroDropdown/UserListDropdown/UserListDropdown';

class UserListElement extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  open = () => {
    this.setState(prevState => ({
      isOpen: true
    }));
  }

  render() {
    let listItemClass = classes.ListItem;
    if (this.state.isOpen) {
      listItemClass += " " + classes.ListItemUncollapsed;
    }

    return <li className={listItemClass} key={this.props.list.title}>
        <h3 className={classes.Title} onClick={this.toggleMenu}>
          {this.props.list.title}
        </h3>
        {this.state.isOpen ? <i className={"far fa-times-circle fa-lg " + classes.CloseButton} onClick={e => {
              e.stopPropagation();
              this.props.removeList(this.props.index);
            }} /> : null}
        <p className={classes.Description}>{this.props.list.description}</p>
        <Collapse isOpen={this.state.isOpen}>
          <HeroIcons iconWrapper={UserListDropdown} heroes={this.props.list.heroes} listIndex={this.props.index} />
        </Collapse>
      </li>;
  }
}

export default UserListElement;
