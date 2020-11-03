import React from 'react';
import {connect} from 'react-redux';
import {
    toggleFollowingInProgress
} from '../../redux/actions';
import Users from './Users';
import {follow, requestUsers, unfollow} from '../../redux/users-reducer';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';



class UsersContainer extends React.Component {
    componentDidMount = () => this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    onPageChanged = pageNum => this.props.requestUsers(pageNum, this.props.pageSize)

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps,
        {follow, unfollow,
    toggleFollowingInProgress, requestUsers
    }),
) (UsersContainer)