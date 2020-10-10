import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostCreater,
    updateNewPostChangeCreater} from '../../../redux/state';



const MyPosts = (props) => {

    const postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} />).reverse()

    const newPostMessage = React.createRef()

    function addPost() {
        props.dispatch(addPostCreater())
    }

    function onPostChange() {
        props.dispatch(
            updateNewPostChangeCreater(newPostMessage.current.value))
    }

    return (
        <div className={s.main_posts}>
            <div className={s.new_post}>
                <img className="mini_avatar" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                <textarea ref={newPostMessage}
                          className={s.message}
                          onChange={onPostChange}
                          name="" id=""
                          value={props.newPostText}
                          placeholder="Что у Вас нового..."/>
                <button onClick={addPost} className="button_blue">Опубликовать</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts
