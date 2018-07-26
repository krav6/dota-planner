import React from "react";

import classes from "./AttributeFilters.css";
import * as data from "../../../shared/data";

const attributeFilters = props => {
  const attributes = data.ATTRIBUTES.map(attribute => (
    <img
      key={attribute}
      className={
        classes.Icon +
        (props.attributes.includes(attribute) ? " " + classes.Active : "")
      }
      src={process.env.PUBLIC_URL + "/img/" + attribute + "_symbol.png"}
      alt={attribute}
      onClick={() => {
        if (props.attributes.includes(attribute)) {
          props.removeAttributeFilter(attribute);
        } else {
          props.addAttributeFilter(attribute);
        }
      }}
    />
  ));

  return <React.Fragment>{attributes}</React.Fragment>;
};

export default attributeFilters;
