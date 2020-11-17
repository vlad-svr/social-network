import {getAuthUserData} from './auth-reducer';


export const INITIALIZED_SUCCESS: string = 'social-network/app/INITIALIZED_SUCCESS'

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

function appReducer(state = initialState, action: any): InitialStateType {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}

        default:
            return state
    }
}



type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => async (dispatch: any) => {
    try {
        const promise = dispatch(getAuthUserData())
        await Promise.all([promise])
        dispatch(initializedSuccess())
    } catch (e) {
        throw e
    }
}


export default appReducer