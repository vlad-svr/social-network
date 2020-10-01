import React from 'react';
import './scss/App.scss'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
    return (
        <div className="app-body">
            <Header />
            <div className="app-wrapper">
                <div className="app-container">
                    <Navbar />
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default App;
