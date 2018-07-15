import React from "react";

import { Container, Row, Col } from "reactstrap";
import HeroIcon from "../HeroIcon/HeroIcon";


const heroIcons = props => {
  const columns = props.heroes.map((val, index) => (
    <Col key={val} xs="4" sm="4" md="2" className="mt-1 mb-1">
      <HeroIcon iconWrapper={props.iconWrapper} listIndex={props.listIndex} heroId={val}/>
    </Col>
  ));
  return (
    <Container>
      <Row>{columns}</Row>
    </Container>
  );
};

export default heroIcons;
