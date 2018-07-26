import React, { Component } from "react";
import { connect } from "react-redux";

import * as listActions from "../../../store/actions/list";
import classes from "./HeroSelector.css";

class HeroSelector extends Component {
  handleClick = () => {
    const heroIndex = this.props.list.heroes.indexOf(this.props.heroId);
    if (heroIndex !== -1) {
      this.props.removeHero(heroIndex);
    } else {
      this.props.addHero(this.props.heroId);
    }
  };

  render() {
    let className = classes.Container;

    if (this.props.list.heroes.includes(this.props.heroId)) {
      className += " " + classes.Selected;
    }
    return (
      <div className={className} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const listIndex = state.list.lists.findIndex(
    list => list.id === props.listId
  );

  return {
    list: state.list.lists[listIndex]
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  removeHero: heroIndex =>
    dispatch(listActions.removeHero(props.listId, heroIndex)),
  addHero: heroId => dispatch(listActions.addHero(props.listId, heroId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroSelector);
