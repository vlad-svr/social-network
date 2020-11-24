import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getStatus,
  updateStatus, savePhoto, saveProfile, actions,
} from '../../redux/profile-reducer'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import { compose } from 'redux'
import {AppStateType} from "../../redux/redux-store";
import {ErrorType, ProfileType} from "../../types/types";


type PathParamsType = { userId: string }
type MapStatePropsType = ReturnType<typeof mapStateToProps>
export type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
  saveProfile: (profile: ProfileType) => Promise<void | ErrorType>
  editModeProfile: (editModeProfile: boolean) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;


class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    if (+this.props.match.params.userId === this.props.authorizedUserId) {
      return this.props.history.push('/profile')
    }
    const userId = +this.props.match.params.userId || this.props.authorizedUserId
    if (!userId) return this.props.history.push('/login')

    this.props.getUserProfile(userId as number)
    this.props.getStatus(userId as number)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }

    if (!this.props.match.params.userId && !this.props.authorizedUserId) {
      return this.props.history.push('/login')
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
  }
}


const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isFetching: state.profilePage.isFetching,
  isEditModeProfile: state.profilePage.editModeProfile
})

export default compose<React.ComponentType>(
  connect(mapStateToProps,
      { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile,
        editModeProfile: actions.editModeProfile}),
  withRouter
)(ProfileContainer)
