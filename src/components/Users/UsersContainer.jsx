import React from 'react';
import {connect} from 'react-redux';
import {
    toggleFollowingInProgress
} from '../../redux/actions';
import Users from './Users';
import {follow, getUsers, unfollow} from '../../redux/users-reducer';
import {compose} from 'redux';



class UsersContainer extends React.Component {
    componentDidMount = () => this.props.getUsers(this.props.currentPage, this.props.pageSize)

    onPageChanged = pageNum => this.props.getUsers(pageNum, this.props.pageSize)

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps,
        {follow, unfollow,
    toggleFollowingInProgress, getUsers
    }),
) (UsersContainer)