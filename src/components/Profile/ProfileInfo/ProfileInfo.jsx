import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  return (
    <div className={s.main_profile_info}>
      <div className={s.item}>
        <div>
          <h1 className="h1">{props.fullName}</h1>
        </div>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div className={s.item}>
        {Object.keys(props.contacts).map((key, ind) => {
          if (!props.contacts[key]) return false
          return (
            <div key={ind} className={s.row}>
              <div className={s.label}>
                {key[0].toUpperCase() + key.slice(1)}
              </div>
              <div className={s.labeled}>
                {props.contacts[key] || 'Не указано'}
              </div>
            </div>
          )
        })}
        {props.lookingForAJob ? (
          <div className={s.row}>
            <div className={s.label}>Ищу работу:</div>
            <div className={s.labeled}>
              {props.lookingForAJobDescription || ''}
            </div>
          </div>
        ) : (
          ''
        )}
        {props.aboutMe ? (
          <div className={s.row}>
            <div className={s.label}>Обо мне:</div>
            <div className={s.labeled}>{props.aboutMe}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ProfileInfo
