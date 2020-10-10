import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return (
            <div className={s.post}>
                <div className={s.content}>
                    <img className="mini_avatar" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                    <p className={s.message}>{props.message}</p>
                </div>
                <div className={s.statistics}>
                    <div className={s.like}>
                        <img className={s.like_btn} src="https://cdn0.iconfinder.com/data/icons/essentials-9/128/__Heart-256.png" alt="like"/>
                        <span className={s.like_text}>{props.likeCount}</span>
                    </div>
                </div>
            </div>
    )
}

export default Post
