import React, { Component } from 'react';
import {connect} from 'react-redux';
import User from './User';

export class UserList extends Component {
    render() {
        console.log(this.props,'asdfasfasdfa')
        return (
            <div>
            {this.props.userList.map((user) => <User  key={user.id} user={user} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
   return {userList : state.users}
}
export default connect(mapStateToProps)(UserList)
