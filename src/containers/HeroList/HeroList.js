import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import * as data from "../../shared/data";
import HeroIcons from "../../components/HeroIcons/HeroIcons";
import AttributeFilters from "../../components/Filters/AttributeFilters/AttributeFilters";
import NameFilter from "../../components/Filters/NameFilter/NameFilter";
import AttackTypeFilters from "../../components/Filters/AttackTypeFilters/AttackTypeFilters";
import HeroSelector from "../../components/HeroSelector/HeroSelector";
import classes from "./HeroList.css";

class HeroList extends Component {
  filter = heroes =>
    heroes.filter(
      val =>
        this.props.attributes.includes(val.primary) &&
        val.name.toLowerCase().includes(this.props.name.toLowerCase()) &&
        this.props.attackTypes.includes(val.attackType)
    );

  render() {
    const heroes = this.filter(data.HERO_LIST).map(val => val.id);
    let list = "No results.";
    if (heroes.length > 0) {
      list = <HeroIcons iconWrapper={HeroSelector} listId={this.props.match.params.id} heroes={heroes} />;
    }

    return (
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs="12" lg="4" className="mt-1 mb-1">
            <NameFilter />
          </Col>
          <Col xs="12" md="3" lg="3" className="mt-1 mb-1">
            <AttributeFilters />
          </Col>
          <Col xs="12" md="4" lg="3" className="mt-1 mb-1">
            <AttackTypeFilters />
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
  name: state.filter.name,
  attackTypes: state.filter.attackTypes
});

export default connect(
  mapStateToProps,
  null
)(HeroList);
