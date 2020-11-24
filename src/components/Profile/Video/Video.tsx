import React from 'react';
import s from './Video.module.css'


const Video: React.FC = () => {
    return (
        <div className={s.main_video}>
            <div className="card__title">Видеозаписи<span>127</span></div>
        </div>
    )
}

export default Video
