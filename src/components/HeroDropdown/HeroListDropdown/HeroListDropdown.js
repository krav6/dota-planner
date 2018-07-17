import React, { Component } from "react";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { connect } from "react-redux";

import * as listActions from "../../../store/actions/list";
import classes from "../HeroDropdown.css";
import HeroDropdown from "../HeroDropdown";

class HeroListDropdown extends Component {
  onCheckboxBtnClick(listId, heroId) {
    const listIndex = this.props.lists.findIndex(list => list.id === listId);
    const heroIndex = this.props.lists[listIndex].heroes.indexOf(heroId);
    if (heroIndex !== -1) {
      this.props.onHeroRemoved(listId, heroIndex);
    } else {
      this.props.onHeroAdded(listId, heroId);
    }
  }

  render() {
    const menuElements = this.props.lists.map(val => (
      <button
        className={
          classes.DropdownItem +
          (val.heroes.includes(this.props.heroId)
            ? " " + classes.DropdownItemSelected
            : "")
        }
        key={val.id}
        onClick={() => this.onCheckboxBtnClick(val.id, this.props.heroId)}
      >
        {val.title}
      </button>
    ));

    return <HeroDropdown>
        <DropdownToggle className={classes.Toggler}>
          {this.props.children}
        </DropdownToggle>
        <DropdownMenu right className={classes.DropdownMenu}>
          <div className={classes.LinkContainer}>
            <a className={classes.Link} href={"https://www.dotabuff.com/heroes/" + this.props.heroId} target="_blank">
              Open Dotabuff
            </a>
          </div>
          <DropdownItem divider />
          {menuElements}
        </DropdownMenu>
      </HeroDropdown>;
  }
}

const mapStateToProps = state => ({
  lists: state.list.lists
});

const mapDispatchToProps = dispatch => ({
  onHeroAdded: (listId, heroId) =>
    dispatch(listActions.addHero(listId, heroId)),
  onHeroRemoved: (listId, heroIndex) =>
    dispatch(listActions.removeHero(listId, heroIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroListDropdown);
