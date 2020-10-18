import {SET_AUTH_USER_DATA} from './types';


const initialState = {
    userId: null,
    email: null,
    login: null,
    profile: {},
    isAuth: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export default authReducer
