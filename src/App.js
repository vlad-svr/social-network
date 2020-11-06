import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Audio from './components/Audio/Audio'
import News from './components/News/News'
import { Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
    componentDidMount = () => this.props.initializeApp()

    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div>
                <HeaderContainer />
                <div className="wrapper">
                    <div className="container">
                        <Navbar />
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/news" component={News} />
                        <Route path="/audio" component={Audio} />
                        <Route path="/login" render={() => <Login />} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp}) (App)
