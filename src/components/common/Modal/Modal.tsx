import React from 'react';
import cn from 'classnames'
import s from './Modal.module.css'


type PropsType = {
    children: React.FC
}
const Modal: React.FC<PropsType> = (props) => {
    return  (
        <div className={s.background}>
            <div className={cn('card', s.window)}>{props.children}</div>
        </div>
    )
}

export default Modal
