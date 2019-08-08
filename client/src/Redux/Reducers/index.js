import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer'

export default combineReducers({
    alert,
    auth:authReducer,
    profile: profileReducer,
    post: postReducer
})
