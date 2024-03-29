import React from 'react';
import AllUsersIndexItemContainer from './all_users_index_item_container';
import { Link } from 'react-router-dom';

class CreateDmForm extends React.Component {
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    findDm(user1, user2) {
        
        for (let i = 0; i < user1.length; i++) {
            for (let j = 0; j < user2.length; j++) {
                if (user1[i] === user2[j]) {
                    return user1[i];
                }
            }
        }
        return false;
    }

    
    render() {
        let { users, currentUserId } = this.props;

        let userLis = Object.values(users).map(user => {
            let directdm;
            
            let findDmId = this.findDm(user.dmIds, users[currentUserId].dmIds)
            if (findDmId) {
                
                directdm = (
                    <Link to={`/client/dms/${findDmId}`} onClick={() => this.props.closeModal()} className="direct-dm-link">
                        <div>{user.name}</div>
                    </Link>
                )
                
            } else {
                
                directdm = (
                        <div onClick={() => {
                            let dm = { author_id: currentUserId };
                            this.props.createDm(dm, user.id);
                            this.props.closeModal();
                        }} className="direct-dm-div"><input type="submit" value={user.name}></input></div>
                )
                
            }

            return <div key={user.id}>{directdm}</div>;
        });

        return (
            <div className="channel-form-container">
                {/* {this.props.otherForm} */}
                <div className="member-list-header">
                    <button onClick={this.props.closeModal}>X</button>
                    <h3>Direct Messages</h3>
                </div>
                <div className="user-lis-container">{userLis}</div>
            </div>
        );
    }


}

export default CreateDmForm;