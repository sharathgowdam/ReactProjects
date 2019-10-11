import {combineReducers} from 'redux';
import users from './userReducer';
import usrReducer from './usrReducer';

export default combineReducers({
    // users: () => [],
    users:users ,
    selectedUser : usrReducer
})