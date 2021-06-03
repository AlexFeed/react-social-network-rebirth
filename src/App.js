import Navbar from "./components/Navbar/Navbar";
import s from "./App.module.scss";
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize} from "./Redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const mapStateToProps = (state) => ({
    initialization: state.app.initialization
});


class App extends Component {
    componentDidMount() {
        this.props.initialize()
    }


    render() {
        if (!this.props.initialization) {
            return <div className={s.preloader}><Preloader/></div>
        } else {
            return (
                <div className={s.appWrapper}>
                    <HeaderContainer className={s.header}/>
                    <Navbar/>
                    <main className={s.appWrapper__content}>
                        <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                        <Route render={() => <DialogsContainer/>} path='/dialogs'/>
                        <Route render={() => <UsersContainer/> } path={'/users'}/>
                        <Route render={() => <LoginContainer/>} path={'/login'}/>
                    </main>
                </div>
            );
        }
    }
}

export default compose(
    connect(mapStateToProps, {initialize})
)(App);

