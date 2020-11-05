import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import headerReducer from './header-reducer'
import appReducer from './app-reducer';

const reducers = combineReducers({
  headerPage: headerReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store
