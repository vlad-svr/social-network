import { addPost } from '../../../redux/actions'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    posts: state.profilePage.posts,
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer
