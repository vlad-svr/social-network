import {InfernActionsTypes} from "./redux-store";

const TOGGLE_PROFILE_MENU = 'social-network/header/TOGGLE_MENU'


const initialState = {
  profileMenu: false,
}


function headerReducer(state = initialState, action: ActionsTypes): InitialStateType {
  switch (action.type) {
    case TOGGLE_PROFILE_MENU:
      return {
        ...state,
        profileMenu: !state.profileMenu,
      }

    default:
      return state
  }
}


export const actions = {
  toggleProfileMenu: (data: boolean) => ({type: TOGGLE_PROFILE_MENU, data} as const)
}


export default headerReducer


type InitialStateType = typeof initialState
type ActionsTypes = InfernActionsTypes<typeof actions>
