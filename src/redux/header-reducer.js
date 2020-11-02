import { TOGGLE_PROFILE_MENU } from './types'

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

export default headerReducer
