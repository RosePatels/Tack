import React from 'react';

class MessageListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.message.body,
            edit: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { message, updateMessage } = this.props;

        updateMessage({ id: message.id, body: this.state.body });
        this.setState({ edit: false });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleEdit(e) {
        e.preventDefault();
        this.setState({ edit: true })
    }

    componentDidUpdate(prevProps){
        if(this.props.message !== prevProps.message){
            this.setState({ body: this.props.message.body })
        }
    }

    render() {

        const { users, message, authorId } = this.props;
        let timeStamp = message.created_at.split("T");
        let months = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec"
        }
        let date = timeStamp[0].split("-");
        let month = months[date[1].toString()];
        let messageDateTime = `${month} ${date[2]}`;

        let messageBody;
        if (this.state.edit) {
            messageBody = <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.body} onChange={this.update("body")} />
                <button>Save</button>
            </form>
        } 
        else {
            messageBody = <p className="message-body">{this.state.body}</p>
        }

        let authButtons;

        if (authorId === message.author_id) {
            authButtons = <div className="auth-buttons">
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={() => { this.props.deleteMessage(message.id) }}>Delete</button>
            </div>
        }


        return (
            <>
            <div className="avatar-img">{users[message.author_id].name[0]}</div>
            <div><h5 className="message-author">{users[message.author_id].name}</h5>
                    {/* <span>{messageDateTime}</span> */}
                {messageBody}
                {authButtons}
            </div>
            </>
        )
    }
}

export default MessageListItem;