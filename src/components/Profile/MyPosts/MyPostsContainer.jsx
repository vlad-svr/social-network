import {addPost, updateNewPostText} from '../../../redux/actions';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
}) (MyPosts)

export default MyPostsContainer
