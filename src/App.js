import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Audio from './components/Audio/Audio';
import News from './components/News/News';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {
    return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="container">
                        <Navbar />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/> }/>
                        <Route exact path='/dialogs' render={() => <DialogsContainer/> }/>
                        <Route path='/users' render={() => <UsersContainer/> }/>
                        <Route path="/news" component={News}/>
                        <Route path="/audio" component={Audio}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
