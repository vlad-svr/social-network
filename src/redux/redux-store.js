import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
