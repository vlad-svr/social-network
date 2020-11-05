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
  SET_STATUS,
  LOGIN,
  TOGGLE_PROFILE_MENU,
  SET_CAPTCHA, INITIALIZED_SUCCESS, DELETE_POST,
} from './types'

export const addPost = (newPost) => ({
  type: ADD_POST,
  newPost,
})

export const deletePost = (idPost) => ({
  type: DELETE_POST,
  id: idPost
})

export const sendMessage = (newMessage) => ({
  type: SEND_MESSAGE,
  newMessage,
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

export const setAuthUserData = (userId, email, login, profile, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, profile, isAuth },
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

export const login = (data) => ({
  type: LOGIN,
  data,
})

export const toggleProfileMenu = (data) => ({
  type: TOGGLE_PROFILE_MENU,
  data,
})

export const setCaptcha = (captcha) => ({
  type: SET_CAPTCHA,
  captcha,
})

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
