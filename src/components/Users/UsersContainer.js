import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {followClick, getUsers, setCurrentPageAC} from "../../Redux/reducers/users-reducer";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../Redux/selectors/users-selectors";

const mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize:getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {setCurrentPage: setCurrentPageAC, followClick, getUsers})(UsersAPIComponent)