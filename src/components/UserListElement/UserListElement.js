import React, { Component } from "react";
import { Collapse } from "reactstrap";

import HeroIcons from "../HeroIcons/HeroIcons";
import classes from "./UserListElement.css";
import UserListDropdown from "../HeroDropdown/UserListDropdown/UserListDropdown";

class UserListElement extends Component {
  toggleMenu = () => {
    this.props.setListIsOpen(this.props.list.id, !this.props.list.isOpen);
  };

  render() {
    let listItemClass = classes.ListItem;
    if (this.props.list.isOpen) {
      listItemClass += " " + classes.ListItemUncollapsed;
    }

    let closeButton = null;
    let editButton = null;

    if (this.props.list.isOpen) {
      editButton = (
        <i
          className={"far fa-edit fa-lg " + classes.CloseButton}
          onClick={e => {
            e.stopPropagation();
            this.props.activateEditing(this.props.list.id);
          }}
        />
      );

      closeButton = (
        <i
          className={"far fa-times-circle fa-lg " + classes.CloseButton}
          onClick={e => {
            e.stopPropagation();
            this.props.removeList(this.props.list.id);
          }}
        />
      );
    }

    return (
      <li className={listItemClass}>
        <h3 className={classes.Title} onClick={this.toggleMenu}>
          {this.props.list.title}
        </h3>
        {closeButton}
        {editButton}
        <p className={classes.Description}>{this.props.list.description}</p>
        <Collapse isOpen={this.props.list.isOpen}>
          <HeroIcons
            iconWrapper={UserListDropdown}
            heroes={this.props.list.heroes}
            listId={this.props.list.id}
          />
        </Collapse>
      </li>
    );
  }
}

export default UserListElement;
