import React from "react";
import LoginFormContainer from '../session_form/login_form_container';

const LoginPage = () => (
    <div className="login-page">
    
        <div className="login-form-location">
            <div className="login-form">
                <h2 className="form-header">Sign In to Tack</h2>
                <p>Enter your <strong>email</strong> and <strong>password</strong></p>
                <LoginFormContainer />
            </div>
        </div>
    </div>
);

export default LoginPage;