import {getAuthUserData} from './auth-reducer';


export const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS'

const initialState = {
    initialized: false
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}

        default:
            return state
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => async (dispatch) => {
    try {
        const promise = dispatch(getAuthUserData())
        await Promise.all([promise])
        dispatch(initializedSuccess())
    } catch (e) {
        throw e
    }
}


export default appReducer