import React, { Component } from "react";

import HeroIcons from "../HeroIcons/HeroIcons";
import classes from "./UserListElement.css";
import { Collapse } from "reactstrap";

class UserListElement extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    let listItemClass = classes.ListItem;
    if (this.state.isOpen) {
      listItemClass += " " + classes.ListItemUncollapsed;
    }

    return (
      <li
        className={listItemClass}
        key={this.props.list.title}
        onClick={this.toggleMenu}
      >
        <h3 className={classes.Title}>{this.props.list.title}</h3>
        {this.state.isOpen ? (
          <i
            className={"far fa-times-circle fa-lg " + classes.CloseButton}
            onClick={e => this.props.listRemoved(e, this.props.index)}
          />
        ) : null}
        <p className={classes.Description}>{this.props.list.description}</p>
        <Collapse isOpen={this.state.isOpen}>
          <HeroIcons
            heroes={this.props.list.heroes}
            listIndex={this.props.index}
            heroRemoved={this.props.heroRemoved}
          />
        </Collapse>
      </li>
    );
  }
}

export default UserListElement;
