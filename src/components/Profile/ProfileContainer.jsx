import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profile-reducer'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2
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
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(ProfileContainer)
