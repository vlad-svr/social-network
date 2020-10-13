import {addPostCreater, updateNewPostChangeCreater} from '../../../redux/actions';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {
            dispatch(addPostCreater())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostChangeCreater(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer
