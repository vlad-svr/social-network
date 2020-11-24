import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {requestUsers, toggleFollow} from '../../redux/users-reducer';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapDispatchPropsType = {
    toggleFollow: (userId: number) => void
    requestUsers: (page: number, pageSize: number) => void
}
type OwnPropsType = {}
type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type PropsType = MapDispatchPropsType & MapStatePropsType


class UsersContainer extends React.Component<PropsType> {
    componentDidMount = () => this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    onPageChanged = (pageNum: number) => this.props.requestUsers(pageNum, this.props.pageSize)

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

function mapStateToProps(state: AppStateType): MapStatePropsType {
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
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {toggleFollow, requestUsers}),
) (UsersContainer) as ComponentType
