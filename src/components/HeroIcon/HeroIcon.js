import React from "react";

import classes from "./HeroIcon.css";
import Auxiliary from "../../hoc/Auxiliary";
import HeroDropdown from "../HeroDropdown/HeroDropdown";

const heroIcon = props => {
  let icon = (
    <img
      className={classes.Icon}
      src={process.env.PUBLIC_URL + "/img/heroes/" + props.heroId + ".png"}
      alt={"Hero-" + props.heroId}
    />
  );

  let closeIcon = null;
  if (typeof props.removeHero !== "undefined") {
    closeIcon = (
      <i
        className={"far fa-times-circle fa-lg " + classes.CloseButton}
        onClick={e => {
          e.stopPropagation();
          props.removeHero(props.listIndex, props.heroIndex);
        }}
      />
    );
  } else {
    icon = <HeroDropdown heroId={props.heroId}>{icon}</HeroDropdown>;
  }

  return (
    <Auxiliary>
      {closeIcon}
      {icon}
    </Auxiliary>
  );
};

export default heroIcon;
