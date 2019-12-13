import React from 'react';
import { connect } from 'react-redux';
import Client from './client';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
    console.log(logout);
  return  {
    logout: () => {
        dispatch(logout())
    }
}};

export default connect(mapStateToProps, mapDispatchToProps)(Client);