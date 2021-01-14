import React, {Suspense} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './App.css'
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import store, {AppStateType} from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Preloader from './components/common/Preloader/Preloader';
import {RouterManager} from "./RouterManager";
const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Login = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Audio = React.lazy(() => import('./components/Audio/Audio'));
const Users = React.lazy(() => import('./components/Users/Users'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));



type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = { initializeApp: () => void }


class App extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
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
                <Header />
                <div className="wrapper">
                    <div className="container">
                        <Navbar />
                        <Suspense fallback={<Preloader />}>
                            <Switch>
                                <Redirect exact from='/' to={RouterManager.profile.my.path}/>
                                <Route path={RouterManager.profile.userId.path} render={() => <Profile />} />
                                <Route path={RouterManager.dialogs.list.path} render={() => <Dialogs />} />
                                <Route path={RouterManager.users.list.path} render={() => <Users/>} />
                                <Route path={RouterManager.news.list.path} component={News} />
                                <Route path={RouterManager.audio.list.path} component={Audio} />
                                <Route path={RouterManager.auth.login.path} render={() => <Login />} />
                                <Route path={RouterManager.chat.index.path} render={() => <ChatPage />} />
                                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: AppStateType) {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = connect(mapStateToProps, {initializeApp}) (App)

const MainApp: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
        </BrowserRouter>
    )
}

export default MainApp
