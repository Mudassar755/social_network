import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';

export default combineReducers({
    alert,
    auth:authReducer
})
