import React, { Component } from "react";
import { connect } from "react-redux";

import * as filterActions from "../../../store/actions/filter";
import classes from "./NameFilter.css";

class NameFilter extends Component {
  handleChange = event => {
    this.props.updateNameFilter(event.target.value);
  };

  render() {
    return (
      <React.Fragment>
          <label className={classes.Label}>Name:</label> 
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
      </React.Fragment>
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
