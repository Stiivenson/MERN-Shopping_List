import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

import { NavLink } from 'reactstrap';

import { connect } from "react-redux";
import { logout } from "../../actions/authAction";


class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href='#'>
                    Logout
                </NavLink>
            </Fragment>
        );
    };
}

export default connect(null, { logout })(Logout);