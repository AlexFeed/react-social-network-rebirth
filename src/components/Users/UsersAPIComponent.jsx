import React from "react";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
        this.props.setCurrentPage(pageNum)
    }

    render() {
        return (
            <Users followingInProgress={this.props.followingInProgress} onFollowClick={this.props.followClick} isFetching={this.props.isFetching}
                   onPageChanged={this.onPageChanged} usersData={this.props.usersData}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}/>
        )
    }
}

export default UsersAPIComponent