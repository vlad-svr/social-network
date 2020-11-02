import {INITIALIZED_SUCCESS} from './types';
import {getAuthUserData} from './auth-reducer';
import {initializedSuccess} from './actions';


const initialState = {
    initialized: false
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}


export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer