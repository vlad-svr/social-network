import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={s.main_posts}>
            <div className={s.new_post}>
                <img className="mini_avatar" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                <textarea className={s.message}
                          name="" id="" cols="30" rows="10" defaultValue="Что у Вас нового..."/>
                <button className="button_blue">Опубликовать</button>
            </div>
            <Post message="Hi, how  are you?" likeCount='123' />
            <Post message="Hi, i'm good!" likeCount='27' />
        </div>
    )
}

export default MyPosts
