import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ContactItem = ({item, hasContact}) => {
    return (
        <div className={s.row}>
            <div className={s.label}>
                {item[0].toUpperCase() + item.slice(1)}
            </div>
            <div className={s.labeled}>
                {hasContact || 'Не указано'}
            </div>
        </div>
    )
}

const ProfileInfo = (props) => {
  return (
    <div className={s.main_profile_info}>
      <div className={s.item}>
        <div>
          <h1 className="h1">{props.fullName}</h1>
        </div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div className={s.item}>
        {Object.keys(props.contacts).map((item, ind) => {
          const hasContact = props.contacts[item] || false
          // if (!hasContact) return false
          return <ContactItem key={ind} item={item} hasContact={hasContact}/>
        })}
        {props.lookingForAJob
            ? <div className={s.row}>
                <div className={s.label}>Ищу работу:</div>
                <div className={s.labeled}>
                  {props.lookingForAJobDescription || ''}
                </div>
              </div>
            : ''}
        {props.aboutMe
            ? <div className={s.row}>
                <div className={s.label}>Обо мне:</div>
                <div className={s.labeled}>{props.aboutMe}</div>
              </div>
            : ''}
      </div>
    </div>
  )
}

export default ProfileInfo
