import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm, { AddPostFormDataType } from './PostForm/PostForm'
import {useDispatch, useSelector} from "react-redux";
import {getPostsSelector} from "../../../redux/profile-selectors";
import {actions} from "../../../redux/profile-reducer";



const MyPosts: React.FC = () => {
    const dispatch = useDispatch()
    const posts = useSelector(getPostsSelector)

  const postsElements = posts
      .map((p) => (
          <Post key={p.id} message={p.message} likeCount={p.likesCount}/>
      ))
      .reverse()

  const onAddPost = (data: AddPostFormDataType): Promise<void> => {
    dispatch(actions.addPost(data.newPost))
    return Promise.resolve()
  }

  return (
      <div className={s.main_posts}>
        <div className={s.new_post}>
          <img
              className="mini_avatar"
              src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1"
              alt="avatar"
          />
          <PostForm onSubmit={onAddPost}/>
        </div>
        {postsElements}
      </div>
  )
}

export default React.memo(MyPosts)
