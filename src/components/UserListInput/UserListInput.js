import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";

import * as notificationActions from "../../store/actions/notification";
import classes from "./UserListInput.css";

class UserListInput extends Component {
  state = {
    title: this.props.title === undefined ? "" : this.props.title,
    description: this.props.description === undefined ? "" : this.props.description
  };

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };

  isValid = () => {
    if (this.state.title === "") {
      this.props.addErrorNotification("List title cannot be empty.");
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.isValid()) {
      return;
    }

    this.props.handleSubmit(this.state.title, this.state.description);
  };

  render() {
    return (
      <Modal isOpen={true} toggle={this.props.dismiss}>
        <ModalBody className={classes.Modal}>
          <form className={classes.Form} onSubmit={this.handleSubmit}>
            <input
              className={classes.Title}
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={e => this.handleChange(e, "title")}
            />
            <button className={classes.Button} type="submit">
              <i className="far fa-check-circle fa-lg" />
            </button>
            <button
              className={classes.Button}
              type="button"
              onClick={() => this.props.dismiss()}
            >
              <i className="far fa-times-circle fa-lg" />
            </button>
            <textarea
              className={classes.Description}
              rows="3"
              type="text"
              value={this.state.description}
              placeholder="Description"
              onChange={e => this.handleChange(e, "description")}
            />
          </form>
        </ModalBody>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  addErrorNotification: message =>
    dispatch(notificationActions.addErrorNotification(message))
});

export default connect(
  null,
  mapDispatchToProps
)(UserListInput);
