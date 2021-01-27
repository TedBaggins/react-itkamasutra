import './App.css';
import './fonts.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";
// import News from './components/News/News';
// import Music from './components/Music/Music';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some error occured");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div>
                <HeaderContainer/>
                <section className="main-wrapper">
                    <div className="container">
                        <div className="main-wrapper__inner">
                            <Navbar/>
                            <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => {
                                return <React.Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path="/news" render={withSuspense(News)}/>
                            <Route path="/music" render={withSuspense(Music)}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp})
// )(App);

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialNetworkApp = (props) => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialNetworkApp;
