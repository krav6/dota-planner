import React from "react";

import classes from "./NameFilter.css";

const nameFilter = props => (
  <React.Fragment>
    <label className={classes.Label}>Name:</label>
    <input
      className={classes.Input}
      type="text"
      value={props.name}
      onChange={e => props.updateNameFilter(e.target.value)}
    />
    <i
      className={"far fa-times-circle fa-lg " + classes.CloseButton}
      onClick={e => {
        e.stopPropagation();
        props.updateNameFilter("");
      }}
    />
  </React.Fragment>
);

export default nameFilter;
