import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'
import {toggleProfileMenu} from '../../redux/header-reducer';


class HeaderContainer extends React.Component {
  render = () => <Header {...this.props} />
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isMenuActive: state.headerPage.profileMenu,
  }
}

export default connect(mapStateToProps, {
  toggleProfileMenu,
  logout,
})(HeaderContainer)
