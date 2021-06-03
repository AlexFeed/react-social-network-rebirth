import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {setStatus, setUserProfile, updateStatus} from "../../Redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom"
import {compose} from "redux";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.isAuth === true) {
            userId = this.props.userId;
        } else if (!userId && this.props.isAuth === false) {
            this.props.history.push('/login');
        }
        this.props.setUserProfile(userId);
        this.props.setStatus(userId);
    }

    render() {
        return <Main isFetching={this.props.isFetching} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    })

export default compose(connect(mapStateToProps, {
    setUserProfile,
    setStatus,
    updateStatus
}), withRouter)(MainContainer);