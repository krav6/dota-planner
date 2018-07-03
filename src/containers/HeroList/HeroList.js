import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import classes from "./HeroList.css";
import * as heroes from "../../shared/heroes";
import HeroIcons from "../../components/HeroIcons/HeroIcons";

class HeroList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <HeroIcons heroes={heroes.LIST.map(val => val.id)} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeroList;
