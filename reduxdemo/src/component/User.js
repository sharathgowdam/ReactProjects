import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions';

 class User extends Component {

    showUserDetails = () => {
        debugger
        if (this.props.userId === this.props.user.id)
        {

            return <h2>{this.props.user.details}</h2>
        }
    }
    render() {
        return (
            <div>
                <button type="button"onClick={() => this.props.selectUser(this.props.user.id)} >
                {this.props.user.firstName}
                </button>

                {this.showUserDetails()}
            </div>
        )
    }
}
const mapStateToProps = state => {
   return {userId : state.selectedUser}

}
export default connect(mapStateToProps,action)(User)
