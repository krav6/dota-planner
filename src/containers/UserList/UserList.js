import React, { Component } from "react";
import { connect } from "react-redux";

import * as listActions from "../../store/actions/list";
import UserListElement from "../../components/UserListElement/UserListElement";
import UserListInput from "../../components/UserListInput/UserListInput";
import classes from "./UserList.css";
import { Container, Row, Col } from "reactstrap";

class UserList extends Component {
  state = {
    addingNewList: true
  };

  componentDidMount() {
    if (this.props.lists.length === 0) {
      this.props.getLists();
    }
  }

  dismissAdding = () => {
    this.setState({ addingNewList: false });
  };

  activateAdding = () => {
    this.setState({ addingNewList: true });
  }

  render() {
    const input = this.state.addingNewList ? (
      <UserListInput
        listTitles={this.props.lists.map(val => val.title)}
        addList={this.props.addList}
        dismiss={this.dismissAdding}
      />
    ) : null;

    const lists = this.props.lists.map((val, index) => (
      <UserListElement
        key={val.title}
        index={index}
        list={val}
        removeList={this.props.removeList}
        removeHero={this.props.removeHero}
      />
    ));
    return <Container>
        <Row className="justify-content-center">
          <Col>
            <button className={classes.AddButton} disabled={this.state.addingNewList} type="button" onClick={() => this.activateAdding()}>
              <i className="fas fa-plus fa-lg" />
            </button>
            {input}
            <ul className={classes.List}>{lists}</ul>
          </Col>
        </Row>
      </Container>;
  }
}

const mapStateToProps = state => ({
  lists: state.list.lists
});

const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(listActions.getLists()),
  removeHero: (listIndex, heroIndex) =>
    dispatch(listActions.removeHero(listIndex, heroIndex)),
  removeList: listIndex => dispatch(listActions.removeList(listIndex)),
  addList: (title, description) =>
    dispatch(listActions.addList(title, description, []))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
