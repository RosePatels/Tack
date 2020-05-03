import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


class AllUsersIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDmCheck = this.handleDmCheck.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let dm = { author_id: currentUserId };
        this.props.createDm(dm, user.id);
        this.props.closeModal();
    }

    findDm(user1, user2){
        debugger;
        for(let i = 0; i < user1.length; i++){
            for(let j = 0; j < user2.length; j++){
                if(user1[i] === user2[j]){
                    return user1[i];
                }
            }
        }
        return false;
    }

    handleDmCheck(){
        let directdm;
        let { user, currentUserId, users, createDm } = this.props;
        let findDmId = this.findDm(user.dmIds, users[currentUserId].dmIds)
        if (findDmId){
            directdm = (
                <Link to={`/client/dms/${findDmId}`} onClick={() => this.props.closeModal()}>
                    <p>{this.props.user.name}</p>
                </Link>
            )
        } else {
          directdm = (
              <form onSubmit={this.handleSubmit}>
                  <div><input type="submit" value={this.props.user.name}></input></div>
              </form>
          )
        }

        return directdm;
    }

    render(){
        debugger;
        return (
            <li className="browse-channel-link">
               {this.handleDmCheck()}
            </li>
        )
    }

}

export default AllUsersIndexItem;