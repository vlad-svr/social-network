import {getAuthUserData} from './auth-reducer';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


export const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS'

export type InitialStateType = typeof initialState
const initialState = {
    initialized: false
}


function appReducer(state = initialState, action: ActionsTypes): InitialStateType {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}

        default:
            return state
    }
}

type ActionsTypes = InitializedSuccessType

type InitializedSuccessType = { type: typeof INITIALIZED_SUCCESS }

export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS})


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => async (dispatch) => {
    try {
        const promise = dispatch(getAuthUserData())
        await Promise.all([promise])
        dispatch(initializedSuccess())
    } catch (e) {
        throw e
    }
}


export default appReducer