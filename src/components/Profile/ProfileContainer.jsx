import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getStatus,
  updateStatus, savePhoto, editModeProfile, saveProfile,
} from '../../redux/profile-reducer'
import {withRouter} from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  refreshProfile() {
    if (+this.props.match.params.userId === +this.props.authorizedUserId) {
      return this.props.history.push('/profile')
    }
    const userId = this.props.match.params.userId || this.props.authorizedUserId
    if (!userId) return this.props.history.push('/login')

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isFetching: state.profilePage.isFetching,
  isEditModeProfile: state.profilePage.editModeProfile
})

export default compose(
  connect(mapStateToProps,
      { getUserProfile, getStatus, updateStatus, savePhoto, editModeProfile, saveProfile }),
  withRouter
)(ProfileContainer)
