import logo from './logo.svg';
import './App.css';
import './fonts.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <section className="main-wrapper">
                <div className="container">
                    <div className="main-wrapper__inner">
                        <Navbar/>
                        {/*<div className="app__wrapper_content">*/}
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default App;
