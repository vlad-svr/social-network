import React from 'react';
import s from './Audio.module.css'


const Audio: React.FC = () => {
    return (
        <div className={s.main_audio}>
            <div className="card__title">Аудиозаписи<span>127</span></div>
        </div>
    )
}

export default Audio
