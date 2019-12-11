import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//action creators

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => {
    return {
    type: LOGOUT_CURRENT_USER
}};

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//thunk action creators

export const login = user => dispatch => {
  return  APIUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err))))
};

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (dispatch(logoutCurrentUser())))
);

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err))))
);
