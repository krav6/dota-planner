import React from "react";
import { Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

import HeroIcons from "../HeroIcons/HeroIcons";
import UserListDropdown from "../../containers/IconWrappers/UserListDropdown/UserListDropdown";
import classes from "./UserListElement.css";

const userListElement = props => {
  let listItemClass = classes.ListItem;
  if (props.list.isOpen) {
    listItemClass += " " + classes.ListItemUncollapsed;
  }

  let closeButton = null;
  let editButton = null;
  let heroManagementButton = null;

  if (props.list.isOpen) {
    editButton = (
      <i
        className={"far fa-edit fa-lg " + classes.Button}
        onClick={e => {
          e.stopPropagation();
          props.activateEditing(props.list.id);
        }}
      />
    );

    closeButton = (
      <i
        className={"far fa-times-circle fa-lg " + classes.Button}
        onClick={e => {
          e.stopPropagation();
          props.removeList(props.list.id);
        }}
      />
    );

    heroManagementButton = (
      <NavLink to={"/" + props.list.id}>
        <i className={"fas fa-ellipsis-h fa-lg " + classes.Button} />
      </NavLink>
    );
  }

  return (
    <li className={listItemClass}>
      <h3
        className={classes.Title}
        onClick={() =>
          props.setListIsOpen(props.list.id, !props.list.isOpen)
        }
      >
        {props.list.title}
      </h3>
      {closeButton}
      {editButton}
      {heroManagementButton}
      <p className={classes.Description}>{props.list.description}</p>
      <Collapse isOpen={props.list.isOpen}>
        <HeroIcons
          iconWrapper={UserListDropdown}
          heroIds={props.list.heroes}
          listId={props.list.id}
        />
      </Collapse>
    </li>
  );
};

export default userListElement;
