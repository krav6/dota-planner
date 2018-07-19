import React, { Component } from "react";
import { connect } from "react-redux";
import saveRefs from "react-save-refs";

import * as listActions from "../../store/actions/list";
import UserListElement from "../../components/UserListElement/UserListElement";
import UserListInput from "../../components/UserListInput/UserListInput";
import classes from "./UserList.css";
import { Container, Row, Col } from "reactstrap";

class UserList extends Component {
  listChildrenRefs = new Map();

  state = {
    addingNewList: false,
    listToggleOpen: true
  };

  dismissAdding = () => {
    this.setState({ addingNewList: false });
  };

  activateAdding = () => {
    this.setState({ addingNewList: true });
  };

  openLists = () => {
    this.listChildrenRefs.forEach(element => {
      element.open();
    });

    this.setState({ listToggleOpen: false });
  };

  closeLists = () => {
    this.listChildrenRefs.forEach(element => {
      element.close();
    });

    this.setState({ listToggleOpen: true });
  };

  getListToggleButton = () => {
    if (this.props.lists.length === 0) {
      return null;
    }

    if (this.state.listToggleOpen) {
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
        ref={saveRefs(this.listChildrenRefs, index)}
        index={index}
        list={val}
        removeList={this.props.removeList}
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
    dispatch(listActions.addList(title, description, []))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
