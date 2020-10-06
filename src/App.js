import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Audio from './components/Audio/Audio';
import News from './components/News/News';


import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="wrapper">
                    <div className="container">
                        <Navbar />
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path="/news" component={News}/>
                        <Route path="/audio" component={Audio}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
