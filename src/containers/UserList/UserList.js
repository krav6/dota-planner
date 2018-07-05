import React, { Component } from "react";
import { connect } from "react-redux";

import * as listActions from "../../store/actions/list";
import UserListElement from "../../components/UserListElement/UserListElement";
import classes from "./UserList.css";
import { Container, Row, Col } from "reactstrap";

class UserList extends Component {
  componentDidMount() {
    if (this.props.lists.length === 0) {
      this.props.getLists();
    }
  }

  render() {
    const lists = this.props.lists.map((val, index) => (
      <UserListElement
        key={val.title}
        index={index}
        list={val}
        listRemoved={this.props.onListRemoved}
        heroRemoved={this.props.onHeroRemoved}
      />
    ));
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
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
  getLists: () => dispatch(listActions.getLists()),
  onHeroRemoved: (listIndex, heroIndex) =>
    dispatch(listActions.removeHero(listIndex, heroIndex)),
  onListRemoved: (listIndex) => dispatch(listActions.removeList(listIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
