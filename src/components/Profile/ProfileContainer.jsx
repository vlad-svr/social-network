import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setUserProfileThunk} from '../../redux/profile-reducer';


class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 2
        this.props.setUserProfileThunk(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileThunk}) (WithUrlDataContainerComponent)