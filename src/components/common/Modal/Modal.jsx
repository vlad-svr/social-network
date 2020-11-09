import React from 'react';
import cn from 'classnames'
import s from './Modal.module.css'


const Modal = (props) => {
    return  (
        <div className={s.background}>
            <div className={cn('card', s.window)}>{props.children}</div>
        </div>
    )
}

export default Modal
