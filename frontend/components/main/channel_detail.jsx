import React from 'react';

class ChannelDetail extends React.Component {

    componentDidMount(){
        this.props.getChannel(this.props.match.params.channelId);
    }

    render(){
        const { channel } = this.props;

        return (
            <div>
                <h2>{channel.title}</h2>
                <p>{channel.description}</p>
            </div>
        )
    }

}

export default ChannelDetail;