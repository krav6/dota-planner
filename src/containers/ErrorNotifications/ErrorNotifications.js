import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

import * as notificationActions from "../../store/actions/notification";
import classes from "./ErrorNotifications.css";

class ErrorNotifications extends Component {
  onDismiss = id => {
      this.props.removeErrorNotification(id);
  }

  render() {
    const errors = this.props.errors.map((error, index) => (
      <Alert className={classes.Alert} color="danger" key={error.id} toggle={() => this.onDismiss(error.id)}>
        {error.message}
      </Alert>
    ));

    return <div className={classes.Container}>{errors}</div>;
  }
}

const mapStateToProps = (state, props) => ({
  errors: state.notification.errors
});

const mapDispatchToProps = (dispatch, props) => ({
  removeErrorNotification: id =>
    dispatch(notificationActions.removeErrorNotification(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorNotifications);
