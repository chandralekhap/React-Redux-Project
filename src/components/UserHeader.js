import { Component } from "react";
import { connect } from 'react-redux';
import {fetchUsers} from '../actions'

class UserHeader extends Component{

    componentDidMount (){

        this.props.fetchUsers(this.props.userId)
    }
    render(){

        const userData = this.props.user.find ((user)=>user.id===this.props.userId);

        if(!userData)
        return null;
        
        return (
            <div>
                 {userData.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return { user: state.user}
}

export default connect (mapStateToProps, {fetchUsers})(UserHeader);