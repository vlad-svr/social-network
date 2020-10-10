import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Audio from './components/Audio/Audio';
import News from './components/News/News';
import {Route} from 'react-router-dom';


const App = (props) => {
    return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="container">
                        <Navbar />
                        <Route path='/profile'
                               render={() => <Profile
                                   state={props.state.profilePage}
                                   dispatch={props.dispatch}/> }/>
                        <Route exact path='/dialogs'
                               render={() => <Dialogs
                                   state={props.state.dialogsPage}
                                   dispatch={props.dispatch}/> }/>
                        <Route path="/news" component={News}/>
                        <Route path="/audio" component={Audio}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
