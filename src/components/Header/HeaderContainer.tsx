import React from 'react'
import Header, {MapDispatchPropsType, MapStatePropsType} from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
  render = () => <Header {...this.props} />
}

function mapStateToProps(state: AppStateType) {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.profile?.photos.small
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
  logout
})(HeaderContainer)
