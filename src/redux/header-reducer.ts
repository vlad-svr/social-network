const TOGGLE_PROFILE_MENU: string = 'social-network/header/TOGGLE_MENU'


const initialState = {
  profileMenu: false,
}
type InitialStateType = typeof initialState

function headerReducer(state = initialState, action: any): InitialStateType {
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


type ToggleProfileMenuType = {
  type: typeof TOGGLE_PROFILE_MENU
  data: boolean
}

export const toggleProfileMenu = (data: boolean): ToggleProfileMenuType => ({type: TOGGLE_PROFILE_MENU, data})


export default headerReducer
