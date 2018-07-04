import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { connect } from "react-redux";

import * as listActions from "../../store/actions/list";
import classes from "./HeroDropdown.css";

class HeroDropdown extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    if (this.props.lists.length === 0) {
      this.props.getLists();
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  onCheckboxBtnClick(listIndex, heroId) {
    const heroIndex = this.props.lists[listIndex].heroes.indexOf(heroId);
    if (heroIndex !== -1) {
      this.props.onHeroRemoved(listIndex, heroIndex);
    } else {
      this.props.onHeroAdded(listIndex, heroId);
    }
  }

  render() {
    const menuElements = this.props.lists.map((val, index) => (
      <button
        className={
          classes.DropdownItem +
          (val.heroes.includes(this.props.heroId)
            ? " " + classes.DropdownItemSelected
            : "")
        }
        key={val.title}
        onClick={() => this.onCheckboxBtnClick(index, this.props.heroId)}
      >
        {val.title}
      </button>
    ));

    return (
      <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
        <DropdownToggle className={classes.Toggler}>
          {this.props.children}
        </DropdownToggle>
        <DropdownMenu right className={classes.DropdownMenu}>
          {menuElements}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(listActions.getLists()),
  onHeroAdded: (listIndex, heroId) =>
    dispatch(listActions.addHero(listIndex, heroId)),
  onHeroRemoved: (listIndex, heroIndex) =>
    dispatch(listActions.removeHero(listIndex, heroIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroDropdown);
