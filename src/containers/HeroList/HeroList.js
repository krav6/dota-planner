import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import * as data from "../../shared/data";
import HeroIcons from "../../components/HeroIcons/HeroIcons";
import HeroSelector from "../IconWrappers/HeroSelector/HeroSelector";
import FilterContainer from "../FilterContainer/FilterContainer";
import classes from "./HeroList.css";

class HeroList extends Component {
  filter = heroes =>
    heroes.filter(
      hero =>
        this.props.attributes.includes(hero.primary) &&
        hero.name.toLowerCase().includes(this.props.name.toLowerCase()) &&
        this.props.attackTypes.includes(hero.attackType)
    );

  render() {
    const heroIds = this.filter(data.HERO_LIST).map(hero => hero.id);
    let list = "No results.";
    if (heroIds.length > 0) {
      list = (
        <HeroIcons
          iconWrapper={HeroSelector}
          listId={this.props.match.params.id}
          heroIds={heroIds}
        />
      );
    }

    return (
      <Container>
        <FilterContainer
          attackTypes={this.props.attackTypes}
          attributes={this.props.attributes}
          name={this.props.name}
        />
        <Row>
          <Col className={classes.List}>{list}</Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  attackTypes: state.filter.attackTypes,
  attributes: state.filter.attributes,
  name: state.filter.name
});

export default connect(
  mapStateToProps,
  null
)(HeroList);
