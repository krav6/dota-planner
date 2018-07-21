import React, { Component } from "react";
import { connect } from "react-redux";

import * as listActions from "../../store/actions/list";
import UserListElement from "../../components/UserListElement/UserListElement";
import UserListInput from "../../components/UserListInput/UserListInput";
import classes from "./UserList.css";
import { Container, Row, Col } from "reactstrap";

class UserList extends Component {
  state = {
    addingNewList: false
  };

  dismissAdding = () => {
    this.setState({ addingNewList: false });
  };

  activateAdding = () => {
    this.setState({ addingNewList: true });
  };

  openLists = () => {
    this.props.lists.forEach(element => {
      this.props.setListIsOpen(element.id, true);
    });
  };

  closeLists = () => {
    this.props.lists.forEach(element => {
      this.props.setListIsOpen(element.id, false);
    });
  };

  getListToggleButton = () => {
    if (this.props.lists.length === 0) {
      return null;
    }

    const isEveryListOpen = this.props.lists.every(list => list.isOpen);

    if (!isEveryListOpen) {
      return (
        <button
          className={classes.Button}
          type="button"
          onClick={this.openLists}
        >
          <i className="fas fa-book-open fa-lg" />
        </button>
      );
    }

    return (
      <button
        className={classes.Button}
        type="button"
        onClick={this.closeLists}
      >
        <i className="fas fa-book fa-lg" />
      </button>
    );
  };

  render() {
    const input = this.state.addingNewList ? (
      <UserListInput
        addList={this.props.addList}
        dismiss={this.dismissAdding}
      />
    ) : null;

    const lists = this.props.lists.map((val, index) => (
      <UserListElement
        key={val.id}
        index={index}
        list={val}
        removeList={this.props.removeList}
        setListIsOpen={this.props.setListIsOpen}
      />
    ));

    const listToggleButton = this.getListToggleButton();

    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <button
              className={classes.Button}
              disabled={this.state.addingNewList}
              type="button"
              onClick={() => this.activateAdding()}
            >
              <i className="fas fa-plus fa-lg" />
            </button>
            {listToggleButton}
            {input}
            <ul className={classes.List}>{lists}</ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.list.lists
});

const mapDispatchToProps = dispatch => ({
  removeList: listId => dispatch(listActions.removeList(listId)),
  addList: (title, description) =>
    dispatch(listActions.addList(title, description, [])),
  setListIsOpen: (listId, isOpen) =>
    dispatch(listActions.setListIsOpen(listId, isOpen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
