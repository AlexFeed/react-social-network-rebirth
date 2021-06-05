import ErrorComponent from "./components/common/FormElements/ErrorComponents/ErrorComponent";
import {initialize, setGlobalError} from "./Redux/reducers/app-reducer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Route, Redirect, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import s from "./App.module.scss";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    initialization: state.app.initialization,
    globalError: state.app.globalError
});




class App extends Component {
    catchAllUnhandledErrors = (error) => {
        this.props.setGlobalError(error.reason.message);
    }

    componentDidMount() {
        this.props.initialize();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    globalErrorWrap = styled.div`
      width: 80%;
    `;

    render() {
        if (!this.props.initialization) {
            return <div className={s.preloader}><Preloader/></div>
        } else {
            return (
                <div className={s.appWrapper}>
                    <HeaderContainer className={s.header}/>
                    <Navbar/>
                    <main className={s.appWrapper__content}>
                        <this.globalErrorWrap><ErrorComponent error={this.props.globalError}/></this.globalErrorWrap>
                        <Switch>
                            <Route path={["/", "/social-network"]} exact><Redirect to='/profile'/></Route>
                            <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                            <Route render={() => <DialogsContainer/>} path='/dialogs'/>
                            <Route render={() => <UsersContainer/> } path={'/users'}/>
                            <Route render={() => <LoginContainer/>} path={'/login'}/>
                            <Route path='*' exact render={() => <h1 className={s.notFoundError}>404 NOT FOUND</h1>}/>
                        </Switch>
                    </main>
                </div>
            );
        }
    }
}

export default compose(
    connect(mapStateToProps, {initialize, setGlobalError})
)(App);

