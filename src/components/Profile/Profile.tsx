import React, {useEffect, useRef} from 'react'
import s from './Profile.module.css'
import cn from 'classnames'
import Friends from './Friends/Friends'
import Audio from './Audio/Audio'
import Video from './Video/Video'
import Avatar from './Avatar/Avatar'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Photos from './Photos/Photos'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Preloader from '../common/Preloader/Preloader'
import ProfileEditForm from './ProfileInfo/ProfileEdit/ProfileEditForm';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams } from 'react-router-dom'
import {AppStateType} from "../../redux/redux-store";
import {actions, getStatus, getUserProfile } from '../../redux/profile-reducer'
import {ErrorType, ProfileType} from "../../types/types";


type QueryParamsType = {userId: string}

const Profile:React.FC = () => {
    const params = useParams<QueryParamsType>()
    const history = useHistory()
    const dispatch = useDispatch()

    const isOwner = !params.userId
    const profile = useSelector((state: AppStateType) => state.profilePage.profile)
    const status = useSelector((state: AppStateType) => state.profilePage.status)
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId)
    const isFetching = useSelector((state: AppStateType) => state.profilePage.isFetching)
    const isEditModeProfile = useSelector((state: AppStateType) => state.profilePage.editModeProfile)

    const prevUserId = useRef(null as number | null)

    const refreshProfile = () => {
        if (+params.userId === authorizedUserId) {
            return history.push('/profile')
        }
        const userId = +params.userId || authorizedUserId
        if (!userId) return history.push('/login')
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

    const savePhoto = (photo: File) => {
        dispatch(savePhoto(photo))
    }
    const editModeProfile = (editModeProfile: boolean) => {
        dispatch(actions.editModeProfile(editModeProfile))
    }
    const updateStatus = (status: string) => {
        dispatch(updateStatus(status))
    }
    const saveProfile = (profile: ProfileType): Promise<void | ErrorType> => {
        return dispatch(saveProfile(profile))
    }


  if (!profile) return <Preloader />
  return (
    <div className={s.main}>
        <div className={s.column_first}>
            <div className={cn('card', s.block)}>
                <Avatar
                    savePhoto={savePhoto}
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
                {!isEditModeProfile
                    ? <ProfileInfo
                        profile={profile}
                        status={status}
                        updateStatus={updateStatus}
                        isOwner={isOwner}
                    />
                    : <ProfileEditForm
                        profile={profile}
                        saveProfile={saveProfile}
                        editModeProfile={editModeProfile}
                    />}
            </div>
            <div className={cn('card', s.block)}>
                <Photos photos={profile.photos} />
            </div>
            <div className={cn('card', s.block)}>
                <MyPostsContainer />
            </div>
        </div>
    </div>
  )
}

export default Profile
