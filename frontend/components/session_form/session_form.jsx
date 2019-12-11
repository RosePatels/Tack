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

    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    additionalInputs(){
        let inputs = (
            <>
                <input type="text" placeholder="name" value={this.state.name} onChange={this.update('name')} />
                <input type="text" placeholder="avatar url" value={this.state.avatar_url} onChange={this.update('avatar_url')} />
            </>
        );
        if (this.props.formType === 'login') {
            inputs = (<></>);
            return inputs;
        } else {
            return inputs;
        }
    }

    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="session-form">
                    {/* {this.renderErrors()} */}
                    
                    {this.additionalInputs()}
                    <input placeholder="email" type="text" value={this.state.email} onChange={this.update('email')} />
                    <input placeholder="password" type="password" value={this.state.password} onChange={this.update('password')} />
                    <input className="session-form-submit" type="submit" value={this.props.formType} />
                
                </form>
            </div>
        );
    }

}

export default SessionForm;