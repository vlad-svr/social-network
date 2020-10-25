import React from 'react'
import { reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'

const PostReduxForm = reduxForm({ form: 'postForm' })(PostForm)

const MyPosts = (props) => {
  const postsElements = props.posts
    .map((p) => (
      <Post key={p.id} message={p.message} likeCount={p.likesCount} />
    ))
    .reverse()

  function onAddPost(data) {
    props.addPost(data.newPost)
  }

  return (
    <div className={s.main_posts}>
      <div className={s.new_post}>
        <img
          className="mini_avatar"
          src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1"
          alt="avatar"
        />
        <PostReduxForm onSubmit={onAddPost} />
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts
