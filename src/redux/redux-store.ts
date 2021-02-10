import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import appReducer from './app-reducer'
import chatReducer from './chat-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  chat: chatReducer,
  auth: authReducer,
  app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export type InfernActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U }
  ? U
  : never
export type BaseThunkType<AT extends Action, ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AT
>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
