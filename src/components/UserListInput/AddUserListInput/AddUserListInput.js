import React, { Component } from "react";

import UserListInput from "../UserListInput";

class AddUserListInput extends Component {
  handleSubmit = (title, description) => {
    this.props.addList(title, description);
    this.props.dismiss();
  };

  render() {
    return (
      <UserListInput
        handleSubmit={this.handleSubmit}
        dismiss={this.props.dismiss}
        addErrorNotification={this.props.addErrorNotification}
      />
    );
  }
}

export default AddUserListInput;
