import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../redux/auth-reducer'
import { toggleProfileMenu } from '../../redux/actions'

class HeaderContainer extends React.Component {
  componentDidMount = () => this.props.getAuthUserData()

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
  getAuthUserData,
  toggleProfileMenu,
  logout,
})(HeaderContainer)
