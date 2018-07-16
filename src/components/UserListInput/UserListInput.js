import React, { Component } from "react";
import { connect } from "react-redux";

import * as notificationActions from "../../store/actions/notification";
import classes from "./UserListInput.css";

class UserListInput extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };

  isValid = () => {
    if(this.state.title === "") {
      this.props.addErrorNotification("New list title cannot be empty.")
      return false;
    }

    if (this.state.description === "") {
      this.props.addErrorNotification("New list description cannot be empty.");
      return false;
    }

    if (this.props.listTitles.includes(this.state.title)) {
      this.props.addErrorNotification("New list title must be unique.");
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.isValid()) {
      return;
    }

    this.props.addList(this.state.title, this.state.description);
    this.props.dismiss();
  };

  render() {
    return (
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
