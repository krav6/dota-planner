import React from "react";

import classes from "./AttackTypeFilters.css";
import * as data from "../../../shared/data";

const attackTypeFilters = props => {
  const attackTypes = data.ATTACK_TYPES.map(attackType => (
    <button
      key={attackType}
      className={
        classes.Button +
        (props.attackTypes.includes(attackType) ? " " + classes.Active : "")
      }
      onClick={() => {
        if (props.attackTypes.includes(attackType)) {
          props.removeAttackTypeFilter(attackType);
        } else {
          props.addAttackTypeFilter(attackType);
        }
      }}
    >
      {attackType}
    </button>
  ));

  return <React.Fragment>{attackTypes}</React.Fragment>;
};

export default attackTypeFilters;
