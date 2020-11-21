import {getAuthUserData} from './auth-reducer'
import {BaseThunkType, InfernActionsTypes} from './redux-store'


export const INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS'

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


export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}


export const initializeApp = (): ThunkType => async (dispatch) => {
    try {
        const promise = dispatch(getAuthUserData())
        await Promise.all([promise])
        dispatch(actions.initializedSuccess())
    } catch (e) {
        throw e
    }
}


export default appReducer


export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InfernActionsTypes<typeof actions>
