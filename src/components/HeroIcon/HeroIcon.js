import React from "react";

import classes from "./HeroIcon.css";
import * as data from "../../shared/data";

const heroIcon = props => {
  let icon = (
    <div className={classes.Icon}>
      <img
        className={classes.Picture}
        src={process.env.PUBLIC_URL + "/img/heroes/" + props.heroId + ".png"}
        alt={"Hero-" + props.heroId}
      />
      <span className={classes.HeroName}>
        {data.HERO_LIST.find(element => element.id === props.heroId).name}
      </span>
    </div>
  );

  const IconWrapper = props.iconWrapper;

  return (
    <IconWrapper listId={props.listId} heroId={props.heroId}>
      {icon}
    </IconWrapper>
  );
};

export default heroIcon;
