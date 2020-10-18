import React from 'react';
import {connect} from 'react-redux';
import {
    follow, setCurrentPage,
    setUsers, setTotalUsersCount,
    toggleIsFetching, unfollow,
    toggleFollowingInProgress
} from '../../redux/actions';
import Users from './Users';
import {usersAPI} from '../../api/api';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNum) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNum)

        usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
        })
    }

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
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching,
    toggleFollowingInProgress
}) (UsersContainer)