import React from "react";
import SignUpContainer from '../session_form/signup_form_container';

const SignUpPage = () => (
    <div className="login-page">
    
        <div className="login-form-location">
            <div className="login-form">
                <h2 className="form-header">Sign In to Tack</h2>
                <p>Enter your <strong>email</strong> and <strong>password</strong></p>
                <SignUpContainer />
            </div>
        </div>
    </div>
);

export default SignUpPage;