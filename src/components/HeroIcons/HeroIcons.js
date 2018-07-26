import React from "react";

import { Container, Row, Col } from "reactstrap";
import HeroIcon from "../HeroIcon/HeroIcon";

const heroIcons = props => {
  const columns = props.heroIds.map((heroId, index) => (
    <Col key={heroId} xs="4" sm="4" md="2" className="mt-1 mb-1">
      <HeroIcon
        iconWrapper={props.iconWrapper}
        listId={props.listId}
        heroId={heroId}
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
