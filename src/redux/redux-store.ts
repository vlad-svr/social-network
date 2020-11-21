import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import headerReducer from './header-reducer'
import appReducer from './app-reducer'

const rootReducer = combineReducers({
  headerPage: headerReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InfernActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
export type BaseThunkType<AT extends Action, ReturnType = Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown, AT>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
