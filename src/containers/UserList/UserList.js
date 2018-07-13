import React, { Component } from "react";
import { connect } from "react-redux";

import * as listActions from "../../store/actions/list";
import UserListElement from "../../components/UserListElement/UserListElement";
import UserListInput from "../../components/UserListInput/UserListInput";
import classes from "./UserList.css";
import { Container, Row, Col } from "reactstrap";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.listChildrenRefs = [];
  }
  state = {
    addingNewList: false
  };

  dismissAdding = () => {
    this.setState({ addingNewList: false });
  };

  activateAdding = () => {
    this.setState({ addingNewList: true });
  };

  f1 = (inst) => {
    this.listChildrenRefs.push(inst);
  }

  f2 = () => {
    this.listChildrenRefs.forEach(element => {
      element.open();
    });
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
        ref={this.f1
        }
        index={index}
        list={val}
        removeList={this.props.removeList}
        removeHero={this.props.removeHero}
      />
    ));

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
            <button
              className={classes.Button}
              type="button"
              onClick={this.f2}
            >
              <i className="fas fa-folder-open fa-lg" />
            </button>
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
