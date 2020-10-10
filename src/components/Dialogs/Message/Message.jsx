import React from 'react';
import s from './Message.module.css'


const Message = (props) => {
    const myMessage = props.myMessage ? s.message + ' ' + s.my_message : s.message
    return (
        <div className={myMessage}>
            <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt="avatar"/>
            <div className={s.item}>
                <span>Владислав</span>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message
