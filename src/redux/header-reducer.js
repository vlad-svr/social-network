const TOGGLE_PROFILE_MENU = 'social-network/header/TOGGLE_MENU'


const initialState = {
  profileMenu: false,
}

function headerReducer(state = initialState, action) {
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


export const toggleProfileMenu = (data) => ({type: TOGGLE_PROFILE_MENU, data})


export default headerReducer
