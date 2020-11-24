import React from 'react'
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
import {ProfileType} from "../../types/types";
import {MapDispatchPropsType} from "./ProfileContainer";


type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
    isFetching: boolean
    isEditModeProfile: boolean
}


const Profile:React.FC<PropsType & MapDispatchPropsType> = (props) => {
  if (!props.profile) return <Preloader />

  return (
    <div className={s.main}>
        <div className={s.column_first}>
            <div className={cn('card', s.block)}>
                <Avatar
                    savePhoto={props.savePhoto}
                    isOwner={props.isOwner}
                    avatar={props.profile.photos.large}
                    isFetching={props.isFetching}
                    userId={props.profile.userId}
                    editModeProfile={props.editModeProfile}
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
                {!props.isEditModeProfile
                    ? <ProfileInfo
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus}
                        isOwner={props.isOwner}
                    />
                    : <ProfileEditForm
                        profile={props.profile}
                        saveProfile={props.saveProfile}
                        editModeProfile={props.editModeProfile}
                    />}
            </div>
            <div className={cn('card', s.block)}>
                <Photos photos={props.profile.photos} />
            </div>
            <div className={cn('card', s.block)}>
                <MyPostsContainer />
            </div>
        </div>
    </div>
  )
}

export default Profile
