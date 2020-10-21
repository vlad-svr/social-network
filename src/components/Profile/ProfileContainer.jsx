import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 2
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
