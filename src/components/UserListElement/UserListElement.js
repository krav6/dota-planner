import React, { Component } from "react";
import { Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

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
    let heroManagementButton = null;

    if (this.props.list.isOpen) {
      editButton = (
        <i
          className={"far fa-edit fa-lg " + classes.Button}
          onClick={e => {
            e.stopPropagation();
            this.props.activateEditing(this.props.list.id);
          }}
        />
      );

      closeButton = (
        <i
          className={"far fa-times-circle fa-lg " + classes.Button}
          onClick={e => {
            e.stopPropagation();
            this.props.removeList(this.props.list.id);
          }}
        />
      );

      heroManagementButton = (
        <NavLink to={"/" + this.props.list.id}>
          <i className={"fas fa-ellipsis-h fa-lg " + classes.Button} />
        </NavLink>
      );
    }

    return (
      <li className={listItemClass}>
        <h3 className={classes.Title} onClick={this.toggleMenu}>
          {this.props.list.title}
        </h3>
        {closeButton}
        {editButton}
        {heroManagementButton}
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
