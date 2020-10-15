import React from 'react';
import s from './Preloader.module.css'
import preloaderImg from '../../../assets/images/preloader.svg';


const Preloader = () => {
    return  <div className={s.preloader_layer}>
                <img className={s.preloader_img} src={preloaderImg} alt='preloader'/>
            </div>
}

export default Preloader
