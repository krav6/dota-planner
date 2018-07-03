import React from "react";

import { Container, Row, Col } from "reactstrap";
import HeroIcon from "../HeroIcon/HeroIcon";


const heroIcons = props => {
  const columns = props.heroes.map((val, index) => (
    <Col key={val} xs="4" md="2" className="mt-1 mb-1">
      <HeroIcon listIndex={props.listIndex} heroIndex={index} heroId={val} heroRemoved={props.heroRemoved}/>
    </Col>
  ));
  return (
    <Container>
      <Row>{columns}</Row>
    </Container>
  );
};

export default heroIcons;
