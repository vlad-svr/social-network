import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {FilterUsersType, requestUsers, toggleFollowUnfollow} from '../../redux/users-reducer';
import {compose} from 'redux';
import {
    getCurrentPage, getFilter,
    getFollowingInProgress,
    getIsFetching,
    getIsModeSearch,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapDispatchPropsType = {
    toggleFollowUnfollow: (userId: number) => void
    requestUsers: (page: number, pageSize: number, filter: FilterUsersType) => void
}
type OwnPropsType = {}
type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isModeSearch: boolean
    filter: FilterUsersType
}
type PropsType = MapDispatchPropsType & MapStatePropsType


class UsersContainer extends React.PureComponent<PropsType> {
    componentDidMount = () => this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.filter)

    onPageChanged = (pageNum: number) => this.props.requestUsers(pageNum, this.props.pageSize, this.props.filter)
    onFilterChanged = (filter: FilterUsersType) => this.props.requestUsers(1, this.props.pageSize, filter)


    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onFilterChanged={this.onFilterChanged}
                users={this.props.users}
                toggleFollowUnfollow={this.props.toggleFollowUnfollow}
                isFetching={this.props.isFetching}
                isModeSearch={this.props.isModeSearch}
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
        followingInProgress: getFollowingInProgress(state),
        isModeSearch: getIsModeSearch(state),
        filter: getFilter(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {toggleFollowUnfollow, requestUsers}),
) (UsersContainer) as ComponentType
