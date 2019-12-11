import React from "react";
import LoginFormContainer from '../session_form/login_form_container';
import NavBar from '../landing_page/navbar';

const LoginPage = () => (
    <div className="login-page">
        <NavBar />
        <div className="login-form-location">
            <div className="login-form">
                <h2 className="form-header">Sign in to Tack</h2>
                <LoginFormContainer />
            </div>
        </div>
    </div>
);

export default LoginPage;