import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import * as data from "../../shared/data";
import HeroIcons from "../../components/HeroIcons/HeroIcons";
import AttributeFilters from "../../components/Filters/AttributeFilters/AttributeFilters";
import NameFilter from "../../components/Filters/NameFilter/NameFilter";
import classes from "./HeroList.css";

class HeroList extends Component {
  filter(heroes) {
    return heroes.filter(val => this.props.attributes.includes(val.primary) && val.name.includes(this.props.name));
  }

  render() {
    const heroes = this.filter(data.HERO_LIST).map(val => val.id);
    let list = "No results.";
    if (heroes.length > 0) {
      list = <HeroIcons heroes={heroes} />;
    }

    return (
      <Container>
        <Row>
          <Col>
            <NameFilter />
            <AttributeFilters />
          </Col>
        </Row>
        <Row>
          <Col className={classes.List}>{list}</Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  attributes: state.filter.attributes,
  name: state.filter.name
});

export default connect(
  mapStateToProps,
  null
)(HeroList);
