import React from "react";

import classes from "./HeroIcons.css";
import { Container, Row, Col } from "reactstrap";

const heroIcons = props => {
  const columns = props.heroes.map((val, index) => (
    <Col key={val} xs="4" md="2" className="mt-1 mb-1">
      <i
        className={"far fa-times-circle fa-lg " + classes.CloseButton}
        onClick={e => props.heroRemoved(e, props.listIndex, index)}
      />
      <img
        className={classes.Icon}
        src={process.env.PUBLIC_URL + "/img/heroes/" + val + ".png"}
        alt={"Hero-" + val}
      />
    </Col>
  ));
  return (
    <Container>
      <Row>{columns}</Row>
    </Container>
  );
};

export default heroIcons;
