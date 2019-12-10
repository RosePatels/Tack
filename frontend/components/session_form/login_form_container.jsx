import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>,
        errors: errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);