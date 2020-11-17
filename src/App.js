import React, {Suspense} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './App.css'
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import store from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import Preloader from './components/common/Preloader/Preloader';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Audio = React.lazy(() => import('./components/Audio/Audio'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));




class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent)
    }

    componentDidMount = () => {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount = () => {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div>
                <HeaderContainer />
                <div className="wrapper">
                    <div className="container">
                        <Navbar />
                        <Suspense fallback={<Preloader />}>
                            <Switch>
                                <Redirect exact from='/' to='/profile'/>
                                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                                <Route path="/dialogs" render={() => <DialogsContainer />} />
                                <Route path="/users" render={() => <UsersContainer />} />
                                <Route path="/news" component={News} />
                                <Route path="/audio" component={Audio} />
                                <Route path="/login" render={() => <Login />} />
                                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                            </Switch>
                        </Suspense>
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

const AppContainer = connect(mapStateToProps, {initializeApp}) (App)

const MainApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
