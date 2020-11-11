import React from 'react'
import cn from 'classnames'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import {stringsToUpperCase} from '../../../utils/core';

const ContactItem = ({contactTitle, contactValue}) => {
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

const ProfileInfo = (props) => {
  return (
    <div className={s.main_profile_info}>
      <div className={s.item}>
        <div className={s.fullname}>
          <h1 className="h1">{stringsToUpperCase(props.fullName)}</h1>
        </div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
      <div className={s.item}>
          {<div className={s.row}>
              <div className={s.label}>Ищу работу:</div>
              <div className={s.labeled}>
                  {props.lookingForAJob ? 'Да' : 'Нет'}
              </div>
          </div>}
          <div className={s.row}>
            <div className={s.label}>Проф. скиллы:</div>
            <div className={s.labeled}>
                {props.lookingForAJobDescription || 'Не указано'}
            </div>
          </div>
          <div className={s.row}>
            <div className={s.label}>Обо мне:</div>
            <div className={s.labeled}>{props.aboutMe || 'Не указано'}</div>
          </div>
          <div className={cn(s.label, s.contact_title)}>Контакты:</div>
          {Object.keys(props.contacts).map((item, ind) => {
              return <ContactItem key={ind} contactTitle={item} contactValue={props.contacts[item]}/>
          })}
      </div>
    </div>
  )
}

export default ProfileInfo
