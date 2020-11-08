import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.authorizedUserId

    if (!userId) return this.props.history.push('/login')

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer)
