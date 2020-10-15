import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <NavLink className='link_normalize' to={"/dialogs/" + props.id}>
            <div className={s.dialog}>
                <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt=""/>
                <span className={s.username}>{props.name}</span>
            </div>
        </NavLink>
    )
}

export default DialogItem