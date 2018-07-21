import React, { Component } from "react";
import { connect } from "react-redux";

import * as filterActions from "../../../store/actions/filter";
import classes from "./AttackTypeFilters.css";
import * as data from "../../../shared/data";

class AttackTypeFilters extends Component {
    onAttackTypeClick = attackType => {
        if (this.props.attackTypes.includes(attackType)) {
            this.props.removeAttackTypeFilter(attackType);
        } else {
            this.props.addAttackTypeFilter(attackType);
        }
    };

    render() {
        const attackTypes = data.ATTACK_TYPES.map(val => (
          <button
            key={val}
            className={
              classes.Button +
                (this.props.attackTypes.includes(val)
                ? " " + classes.Active
                : "")
            }
            onClick={() => this.onAttackTypeClick(val)}
            >{val}</button>
        ));

        return <React.Fragment>{attackTypes}</React.Fragment>;
    }
}

const mapStateToProps = state => ({
    attackTypes: state.filter.attackTypes
});

const mapDispatchToProps = dispatch => ({
    addAttackTypeFilter: attribute =>
        dispatch(filterActions.addAttackTypeFilter(attribute)),
    removeAttackTypeFilter: attribute =>
        dispatch(filterActions.removeAttackTypeFilter(attribute))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttackTypeFilters);
