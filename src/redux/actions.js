import {
  ADD_POST,
  CURRENT_PAGE,
  FOLLOW,
  SEND_MESSAGE,
  SET_AUTH_USER_DATA,
  SET_USER_PROFILE,
  SET_USERS,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  TOTAL_USERS,
  UNFOLLOW,
  UPDATE_NEW_MESSAGE_CHANGE,
  UPDATE_NEW_POST_CHANGE,
  SET_STATUS,
  UPDATE_STATUS,
} from './types'

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (data) => ({
  type: UPDATE_NEW_POST_CHANGE,
  data,
})

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const changeMessageText = (data) => ({
  type: UPDATE_NEW_MESSAGE_CHANGE,
  data,
})

export const followSuccess = (data) => ({
  type: FOLLOW,
  userId: data,
})

export const unfollowSuccess = (data) => ({
  type: UNFOLLOW,
  userId: data,
})

export const setUsers = (data) => ({
  type: SET_USERS,
  users: data,
})

export const setCurrentPage = (data) => ({
  type: CURRENT_PAGE,
  page: data,
})

export const setTotalUsersCount = (data) => ({
  type: TOTAL_USERS,
  totalCount: data,
})

export const toggleIsFetching = (data) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: data,
})

export const setUserProfile = (data) => ({
  type: SET_USER_PROFILE,
  profile: data,
})

export const setAuthUserData = (userId, email, login, profile) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login, profile },
})

export const toggleFollowingInProgress = (data, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: data,
  userId,
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})

export const updateStatus = (status) => ({
  type: UPDATE_STATUS,
  status,
})
