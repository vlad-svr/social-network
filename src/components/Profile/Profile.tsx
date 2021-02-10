import React, { useEffect, useRef } from 'react'
import s from './Profile.module.css'
import cn from 'classnames'
import Friends from './Friends/Friends'
import Audio from './Audio/Audio'
import Video from './Video/Video'
import Avatar from './Avatar/Avatar'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Photos from './Photos/Photos'
import Preloader from '../common/Preloader/Preloader'
import ProfileEditForm from './ProfileInfo/ProfileEdit/ProfileEditForm'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {
  actions,
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from '../../redux/profile-reducer'
import { ProfileType } from '../../types/types'
import {
  getIsEditModeProfileSelector,
  getIsFetchingSelector,
  getProfileSelector,
  getStatusSelector,
} from '../../redux/profile-selectors'
import { getUserIdSelector } from '../../redux/auth-selectors'
import { RouterManager } from '../../RouterManager'
import MyPosts from './MyPosts/MyPosts'

type QueryParamsType = { userId: string }

const Profile: React.FC = () => {
  const params = useParams<QueryParamsType>()
  const history = useHistory()
  const dispatch = useDispatch()

  const isOwner = !params.userId
  const profile = useSelector(getProfileSelector)
  const status = useSelector(getStatusSelector)
  const authorizedUserId = useSelector(getUserIdSelector)
  const isFetching = useSelector(getIsFetchingSelector)
  const isEditModeProfile = useSelector(getIsEditModeProfileSelector)

  const prevUserId = useRef(null as number | null)

  const refreshProfile = () => {
    if (+params.userId === authorizedUserId) {
      return history.push(RouterManager.profile.my.path)
    }
    const userId = +params.userId || authorizedUserId
    if (!userId) return history.push(RouterManager.auth.login.path)
    prevUserId.current = userId
    dispatch(getUserProfile(userId as number))
    dispatch(getStatus(userId as number))
  }

  useEffect(() => {
    refreshProfile()
  }, [])

  useEffect(() => {
    if (+params.userId !== prevUserId.current) refreshProfile()
  }, [params.userId, authorizedUserId, history])

  const onSavePhoto = (photo: File) => {
    dispatch(savePhoto(photo))
  }
  const editModeProfile = (editModeProfile: boolean) => {
    dispatch(actions.editModeProfile(editModeProfile))
  }
  const onUpdateStatus = (status: string) => {
    dispatch(updateStatus(status))
  }

  const onSaveProfile = (profile: ProfileType) => {
    return dispatch(saveProfile(profile))
  }

  if (!profile) return <Preloader />
  return (
    <div className={s.main}>
      <div className={s.column_first}>
        <div className={cn('card', s.block)}>
          <Avatar
            onSavePhoto={onSavePhoto}
            isOwner={isOwner}
            avatar={profile.photos.large}
            isFetching={isFetching}
            userId={profile.userId}
            editModeProfile={editModeProfile}
          />
        </div>
        <div className={cn('card', s.block)}>
          <Friends />
        </div>
        <div className={cn('card', s.block)}>
          <Video />
        </div>
        <div className={cn('card', s.block)}>
          <Audio />
        </div>
      </div>
      <div className={s.column_second}>
        <div className={cn('card', s.block)}>
          {!isEditModeProfile ? (
            <ProfileInfo
              profile={profile}
              status={status}
              onUpdateStatus={onUpdateStatus}
              isOwner={isOwner}
            />
          ) : (
            <ProfileEditForm
              profile={profile}
              onSaveProfile={onSaveProfile}
              editModeProfile={editModeProfile}
            />
          )}
        </div>
        <div className={cn('card', s.block)}>
          <Photos photos={profile.photos} />
        </div>
        <div className={cn('card', s.block)}>
          <MyPosts />
        </div>
      </div>
    </div>
  )
}

export default Profile
