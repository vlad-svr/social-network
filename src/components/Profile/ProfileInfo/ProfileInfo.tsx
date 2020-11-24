import React from 'react'
import cn from 'classnames'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import {stringsToUpperCase} from '../../../utils/core';
import {ContactsType, ProfileType} from "../../../types/types";


type ContactItemType = {
    contactTitle: string
    contactValue: string | null
}

const ContactItem: React.FC<ContactItemType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <div className={s.label}>
                {contactTitle[0].toUpperCase() + contactTitle.slice(1)}
            </div>
            <div className={s.labeled}>
                {contactValue || 'Не указано'}
            </div>
        </div>
    )
}


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus, isOwner}) => {
  return (
    <div className={s.main_profile_info}>
      <div className={s.item}>
        <div className={s.fullname}>
          <h1 className="h1">{stringsToUpperCase(profile.fullName)}</h1>
        </div>
        <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
      </div>
      <div className={s.item}>
          {<div className={s.row}>
              <div className={s.label}>Ищу работу:</div>
              <div className={s.labeled}>
                  {profile.lookingForAJob ? 'Да' : 'Нет'}
              </div>
          </div>}
          <div className={s.row}>
            <div className={s.label}>Проф. скиллы:</div>
            <div className={s.labeled}>
                {profile.lookingForAJobDescription || 'Не указано'}
            </div>
          </div>
          <div className={s.row}>
            <div className={s.label}>Обо мне:</div>
            <div className={s.labeled}>{profile.aboutMe || 'Не указано'}</div>
          </div>
          <div className={cn(s.label, s.contact_title)}>Контакты:</div>
          {Object.keys(profile.contacts).map((item, ind) => {
              return <ContactItem key={item + ind} contactTitle={item} contactValue={profile.contacts[item as keyof ContactsType]}/>
          })}
      </div>
    </div>
  )
}

export default ProfileInfo
