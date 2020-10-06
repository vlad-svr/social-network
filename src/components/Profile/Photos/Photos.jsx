import React from 'react';
import s from './Photos.module.css'


const Photos = () => {
    return (
        <div className={s.main_photos}>
            <div className="card__title">Мои фотографии<span>127</span></div>
            <div className={s.list}>
                <div className={s.item}>
                    <img className={s.img} src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo3"/>
                </div>
                <div className={s.item}>
                    <img className={s.img} src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo2"/>
                </div>
                <div className={s.item}>
                    <img className={s.img} src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo12"/>
                </div>
                <div className={s.item}>
                    <img className={s.img} src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo1"/>
                </div>
            </div>
        </div>
    )
}

export default Photos
