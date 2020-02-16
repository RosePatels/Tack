import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

class AllChannelIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li className="browse-channel-link">
                <Link to={`/client/channels/${this.props.channel.id}`} onClick={() => this.props.closeModal()}>
                    <p className="browse-channel-title"><i className="fas fa-hashtag"></i>{this.props.channel.title}</p>
                    <p className="browse-channel-description">{this.props.channel.description}</p>
                </Link>
            </li>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
       
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mapDispatchToProps)(AllChannelIndexItem);