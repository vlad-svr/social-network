import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {requestUsers, toggleFollow, toggleFollowingInProgress} from '../../redux/users-reducer';
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
                toggleFollow={this.props.toggleFollow}
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
        {toggleFollow,
    toggleFollowingInProgress, requestUsers
    }),
) (UsersContainer)