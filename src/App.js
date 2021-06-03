import Navbar from "./components/Navbar/Navbar";
import styles from "./App.scss";
import {
    Route, withRouter,
} from "react-router-dom";
import MainContainer from "./components/Profile/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React, {Component, Suspense} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize} from "./Redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./HOC/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/dialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));

const mapStateToProps = (state) => ({
    initialization: state.app.initialization
});


class App extends Component {
    componentDidMount() {
        this.props.initialize()
    }


    render() {
        if (!this.props.initialization) {
            return <div className="preloader"><Preloader/></div>
        } else {
            return (
                <div className='appWrapper'>
                    <HeaderContainer className='header'/>
                    <Navbar/>
                    <main className="appWrapper__content">
                        <Route render={() => <MainContainer/>} path='/profile/:userId?'/>
                        <Route render={withSuspense(DialogsContainer)} path='/dialogs'/>
                        <Route render={withSuspense(UsersContainer) } path={'/users'}/>
                        <Route render={() => <LoginContainer/>} path={'/login'}/>
                        <Route render={withSuspense(News)} path='/news'/>
                    </main>
                </div>
            );
        }
    }
}

export default compose(
    connect(mapStateToProps, {initialize})
)(App);

