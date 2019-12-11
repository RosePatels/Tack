import React from "react";
import SignUpContainer from '../session_form/signup_form_container';
import NavBar from '../landing_page/navbar';

const SignUpPage = () => (
    <div className="login-page">
        <NavBar />
        <div className="login-form-location">
            <div className="login-form">
                <h2 className="form-header">Sign in to Tack</h2>
                <SignUpContainer />
            </div>
        </div>
    </div>
);

export default SignUpPage;