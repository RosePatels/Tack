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
                <div className="all_channel_form">
                    <div className="esc-button"><button onClick={this.props.closeModal}>X</button></div>
                    <div className="browse-channels-container">
                        <h2>Browse Channels</h2>
                        <div className="browse-index-container">
                            <span>All Channels</span>
                            <ul className="browse-channel-index">
                                {channelLis}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default AllChannelForm;