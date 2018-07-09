import React, { Component } from "react";

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
    return (
      this.state.title !== "" &&
      this.state.description !== "" &&
      !this.props.listTitles.includes(this.state.title)
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.isValid()) {
      //TODO: notify user
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

export default UserListInput;
