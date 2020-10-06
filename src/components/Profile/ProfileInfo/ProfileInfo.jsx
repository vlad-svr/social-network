import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.main_profile_info}>
            <div className={s.item}>
                <div>
                    <h1 className="h1">Владислав Свиридов</h1>
                </div>
            </div>
            <div className={s.item}>
                <div className={s.row}>
                    <div className={s.label}>День рождения:</div>
                    <div className={s.labeled}>25 мая 1995 г.</div>
                </div>
                <div className={s.row}>
                    <div className={s.label}>Город:</div>
                    <div className={s.labeled}>Брест</div>
                </div>
                <div className={s.row}>
                    <div className={s.label}>Место работы:</div>
                    <div className={s.labeled}>МЧС, Брестский ГОЧС, ПАСЧ №2</div>
                </div>
                <div className={s.row}>
                    <div className={s.label}>Сайт:</div>
                    <div className={s.labeled}>http://sviridov_vl</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
