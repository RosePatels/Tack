import React from 'react';
import AllChannelIndexItem from './all_channel_index_item';

class AllChannelForm extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchChannels();
    }

    render() {
        const { channels } = this.props;
        const channelLis = channels.map(channel => (
            <AllChannelIndexItem key={channel.id} channel={channel} />
        ))
        return (
            <>
                <button onClick={this.props.closeModal}>X</button>
                <ul className="channel-index">
                    {channelLis}
                </ul>
            </>
        )
    }

}

export default AllChannelForm;