import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import * as filterActions from "../../store/actions/filter";
import AttributeFilters from "../../components/Filters/AttributeFilters/AttributeFilters";
import NameFilter from "../../components/Filters/NameFilter/NameFilter";
import AttackTypeFilters from "../../components/Filters/AttackTypeFilters/AttackTypeFilters";

class FilterContainer extends Component {
  render() {
    return (
      <Row className="justify-content-center align-items-center">
        <Col xs="12" lg="4" className="mt-1 mb-1">
          <NameFilter
            name={this.props.name}
            updateNameFilter={this.props.updateNameFilter}
          />
        </Col>
        <Col xs="12" md="3" lg="3" className="mt-1 mb-1">
          <AttributeFilters
            attributes={this.props.attributes}
            addAttributeFilter={this.props.addAttributeFilter}
            removeAttributeFilter={this.props.removeAttributeFilter}
          />
        </Col>
        <Col xs="12" md="4" lg="3" className="mt-1 mb-1">
          <AttackTypeFilters
            attackTypes={this.props.attackTypes}
            addAttackTypeFilter={this.props.addAttackTypeFilter}
            removeAttackTypeFilter={this.props.removeAttackTypeFilter}
          />
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addAttackTypeFilter: attribute =>
    dispatch(filterActions.addAttackTypeFilter(attribute)),
  removeAttackTypeFilter: attribute =>
    dispatch(filterActions.removeAttackTypeFilter(attribute)),
  updateNameFilter: name => dispatch(filterActions.updateNameFilter(name)),
  addAttributeFilter: attribute =>
    dispatch(filterActions.addAttributeFilter(attribute)),
  removeAttributeFilter: attribute =>
    dispatch(filterActions.removeAttributeFilter(attribute))
});

export default connect(
  null,
  mapDispatchToProps
)(FilterContainer);
