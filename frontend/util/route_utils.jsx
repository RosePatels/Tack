import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    return{
    loggedIn: Boolean(state.session.id)}
};

const Auth = ({loggedIn, exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={props => (
        loggedIn ? <Redirect to="/client" /> : <Component {...props} />
    )} />
);

const Protected = ({loggedIn, exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
