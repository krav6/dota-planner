import React, { Component } from "react";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { connect } from "react-redux";

import * as listActions from "../../../store/actions/list";
import classes from "../HeroDropdown.css";
import HeroDropdown from "../HeroDropdown";

class UserListDropdown extends Component {
  onRemoveHeroButtonClicked(heroId) {
    const heroIndex = this.props.list.heroes.indexOf(heroId);
    if (heroIndex !== -1) {
      this.props.onHeroRemoved(heroIndex);
    }
  }
  render() {
    const removeHeroButton = (
      <button
        className={classes.DropdownItem}
        onClick={() => this.onRemoveHeroButtonClicked(this.props.heroId)}
      >
        Remove from list
      </button>
    );

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
          {removeHeroButton}
        </DropdownMenu>
      </HeroDropdown>;
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
  onHeroRemoved: heroIndex =>
    dispatch(listActions.removeHero(props.listId, heroIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListDropdown);
