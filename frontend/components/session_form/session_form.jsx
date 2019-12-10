import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                        <label>Email:
                            <input type="text" value={this.state.username} onChange={this.update('username')} />
                        </label>
                        <label>
                            Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }

}

export default SessionForm;