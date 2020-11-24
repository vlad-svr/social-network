import MyPosts, {MapDispatchPropsType, MapStatePropsType} from './MyPosts'
import { connect } from 'react-redux'
import {actions} from '../../../redux/profile-reducer';
import {AppStateType} from "../../../redux/redux-store";


function mapStateToProps(state: AppStateType) {
  return {
    posts: state.profilePage.posts,
  }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, { addPost: actions.addPost })(MyPosts)

export default MyPostsContainer
