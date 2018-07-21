import React, { Component } from "react";
import { connect } from "react-redux";

import * as filterActions from "../../../store/actions/filter";
import classes from "./AttributeFilters.css";
import * as data from "../../../shared/data";

class AttributeFilters extends Component {
  onAttributeClick = attribute => {
    if (this.props.attributes.includes(attribute)) {
      this.props.removeAttributeFilter(attribute);
    } else {
      this.props.addAttributeFilter(attribute);
    }
  };

  render() {
    const attributes = data.ATTRIBUTES.map(val => (
      <img
        key={val}
        className={
          classes.Icon +
          (this.props.attributes.includes(val) ? " " + classes.Active : "")
        }
        src={process.env.PUBLIC_URL + "/img/" + val + "_symbol.png"}
        alt={val}
        onClick={() => this.onAttributeClick(val)}
      />
    ));

    return <React.Fragment>{attributes}</React.Fragment>;
  }
}

const mapStateToProps = state => ({
  attributes: state.filter.attributes
});

const mapDispatchToProps = dispatch => ({
  addAttributeFilter: attribute =>
    dispatch(filterActions.addAttributeFilter(attribute)),
  removeAttributeFilter: attribute =>
    dispatch(filterActions.removeAttributeFilter(attribute))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttributeFilters);
