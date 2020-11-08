import React from 'react'
import s from './Profile.module.css'
import Friends from './Friends/Friends'
import Audio from './Audio/Audio'
import Video from './Video/Video'
import Avatar from './Avatar/Avatar'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Photos from './Photos/Photos'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Preloader from '../common/Preloader/Preloader'

const Profile = (props) => {
  if (!props.profile) return <Preloader />

  return (
    <div className={s.main}>
      <div className={'card ' + s.avatar}>
        <Avatar avatar={props.profile.photos.large} />
      </div>
      <div className={'card ' + s.friends}>
        <Friends />
      </div>
      <div className={'card ' + s.profile_info}>
        <ProfileInfo
          fullName={props.profile.fullName}
          contacts={props.profile.contacts}
          aboutMe={props.profile.aboutMe}
          lookingForAJob={props.profile.lookingForAJob}
          lookingForAJobDescription={props.profile.lookingForAJobDescription}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div className={'card ' + s.photos}>
        <Photos photos={props.profile.photos} />
      </div>
      <div className={'card ' + s.posts}>
        <MyPostsContainer />
      </div>
      <div className={'card ' + s.video}>
        <Video />
      </div>
      <div className={'card ' + s.audio}>
        <Audio />
      </div>
    </div>
  )
}

export default Profile
