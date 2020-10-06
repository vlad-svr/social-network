import React from 'react';
import s from './Profile.module.css'
import Friends from './Friends/Friends';
import MyPosts from './MyPosts/MyPosts';
import Audio from './Audio/Audio';
import Video from './Video/Video';
import Avatar from './Avatar/Avatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Photos from './Photos/Photos';


const Profile = () => {
    return (
        <div className={s.main}>
            <div className={'card ' + s.avatar}>
                <Avatar />
            </div>
            <div className={'card ' + s.friends}>
                <Friends />
            </div>
            <div className={'card ' + s.profile_info}>
                <ProfileInfo />
            </div>
            <div className={'card ' + s.photos}>
                <Photos />
            </div>
            <div className={'card ' + s.posts}>
                <MyPosts />
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
