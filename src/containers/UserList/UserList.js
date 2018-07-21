import React, { Component } from "react";
import { connect } from "react-redux";

import * as listActions from "../../store/actions/list";
import UserListElement from "../../components/UserListElement/UserListElement";
import AddUserListInput from "../../components/UserListInput/AddUserListInput/AddUserListInput";
import EditUserListInput from "../../components/UserListInput/EditUserListInput/EditUserListInput";
import classes from "./UserList.css";
import { Container, Row, Col } from "reactstrap";

class UserList extends Component {
  state = {
    addingNewList: false,
    editingList: false,
    listToEdit: null
  };

  dismissAdding = () => {
    this.setState({ addingNewList: false });
  };

  activateAdding = () => {
    this.setState({ addingNewList: true });
  };

  activateEditing = listToEdit => {
    this.setState({ editingList: true, listToEdit });
  };

  dismissEditing = () => {
    this.setState({ editingList: false, listToEdit: null });
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
    let input = null;

    if (this.state.addingNewList) {
      input = (
        <AddUserListInput
          addList={this.props.addList}
          dismiss={this.dismissAdding}
        />
      );
    }

    if (this.state.editingList) {
      const list = this.props.lists.find(element => element.id === this.state.listToEdit);
      input = (
        <EditUserListInput
          listId={this.state.listToEdit}
          title={list.title}
          description={list.description}
          editList={this.props.editList}
          dismiss={this.dismissEditing}
        />
      );
    }

    const lists = this.props.lists.map((val, index) => (
      <UserListElement
        key={val.id}
        index={index}
        list={val}
        removeList={this.props.removeList}
        setListIsOpen={this.props.setListIsOpen}
        activateEditing={this.activateEditing}
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
  editList: (listId, title, description) =>
    dispatch(listActions.editList(listId, title, description)),
  setListIsOpen: (listId, isOpen) =>
    dispatch(listActions.setListIsOpen(listId, isOpen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
