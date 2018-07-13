import React from "react";

import classes from "./HeroIcon.css";
import Auxiliary from "../../hoc/Auxiliary";
import HeroDropdown from "../HeroDropdown/HeroDropdown";
import * as data from "../../shared/data";

const heroIcon = props => {
  let icon = <div className={classes.Icon}>
      <img className={classes.Picture} src={process.env.PUBLIC_URL + "/img/heroes/" + props.heroId + ".png"} alt={"Hero-" + props.heroId} />
    {typeof props.removeHero !== "undefined" ? null : <span className={classes.HeroName}>
      {data.HERO_LIST.find(element => element.id === props.heroId).name}
    </span>}
      
    </div>;

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
