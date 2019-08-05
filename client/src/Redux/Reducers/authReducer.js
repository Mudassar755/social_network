import { REGISTER_SUCCESS, REGISTER_FAIL } from '../Actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function(state = initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
               ...state,
               ...action.payload,
               isAuthenticated: true,
               loading: false,
            }
            case REGISTER_FAIL:
            localStorage.removeItem('token')    
            return {
                ...state,
                isAuthenticated:false,
                loading: false,
                token: null
                }
        default:
            return state
    }
}