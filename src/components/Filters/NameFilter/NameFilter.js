import React, { Component } from "react";
import { connect } from "react-redux";

import * as filterActions from "../../../store/actions/filter";
import classes from "./NameFilter.css";
import Auxiliary from "../../../hoc/Auxiliary";

class NameFilter extends Component {
  handleChange = event => {
    this.props.updateNameFilter(event.target.value);
  };

  render() {
    return (
      <Auxiliary>
        <input
          className={classes.Input}
          type="text"
          value={this.props.name}
          onChange={e => this.handleChange(e)}
        />
        <i
          className={"far fa-times-circle fa-lg " + classes.CloseButton}
          onClick={e => {
            e.stopPropagation();
            this.props.updateNameFilter("");
          }}
        />
      </Auxiliary>
    );
  }
}

const mapStateToProps = state => ({
  name: state.filter.name
});

const mapDispatchToProps = dispatch => ({
  updateNameFilter: name => dispatch(filterActions.updateNameFilter(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameFilter);
