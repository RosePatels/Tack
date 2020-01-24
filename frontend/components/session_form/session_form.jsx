import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            avatar_url: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoUser(){
        let demoUser = {email: 'demo@demo.com', password: '123456'};
        if (this.props.formType === 'Sign In'){
            this.props.processForm(demoUser);
        } else {
            this.props.demoLogin(demoUser);
        }
    }

    renderErrors(){
        let errors = null;
        if (this.props.errors) {
            errors = (
                <ul className="errors-list">
                    {this.props.errors.map((error, i) => {
                        return (<li key={`error-${i}`}>{error}</li>);
                    })}
                </ul>
            );
        }

        return errors;
    }

    additionalInputs(){
        let inputs = (
            <>
                <p>Enter your <strong>name</strong>, <strong>avatar url</strong>, <strong>email</strong> and <strong>password</strong></p>
                <input type="text" placeholder="name" value={this.state.name} onChange={this.update('name')} />
                <input type="text" placeholder="avatar url" value={this.state.avatar_url} onChange={this.update('avatar_url')} />
            </>
        );
        if (this.props.formType === 'Sign In') {
            inputs = (<>
                <p>Enter your <strong>email</strong> and <strong>password</strong></p></>);
            return inputs;
        } else {
            return inputs;
        }
    }

    render() {
        return (
            <div>
                <div className="errors-form">{this.renderErrors()}</div>
                <form onSubmit={this.handleSubmit} className="session-form">                
                    {this.additionalInputs()}
                    <input placeholder="you@example.com" type="text" value={this.state.email} onChange={this.update('email')} />
                    <input placeholder="password" type="password" value={this.state.password} onChange={this.update('password')} />
                    <input className="session-form-submit" type="submit" value={this.props.formType} />
                </form>
                <div className='try-demo-align'><a className="try-demo" onClick={this.handleDemoUser}>Try out Tack as a Demo User</a></div>
            </div>
        );
    }

}

export default SessionForm;