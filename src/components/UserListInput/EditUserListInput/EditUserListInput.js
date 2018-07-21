import React, { Component } from "react";

import UserListInput from "../UserListInput";

class EditUserListInput extends Component {
  handleSubmit = (title, description) => {
    this.props.editList(this.props.listId, title, description);
    this.props.dismiss();
  };

  render() {
    return <UserListInput handleSubmit={this.handleSubmit} dismiss={this.props.dismiss} title={this.props.title} description={this.props.description}/>;
  }
}

export default EditUserListInput;
