import React from "react";
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import Main from '../main/main';


class Client extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        return (
            <div className="client-layout">
                <SidebarContainer />
                <Main />
            </div>
            );
    }
};

export default Client;