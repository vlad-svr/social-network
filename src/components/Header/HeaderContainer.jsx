import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/actions';
import {authAPI, profileAPI} from '../../api/api';

class HeaderContainer extends React.Component{
    componentDidMount() {
        authAPI.isAuth().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                profileAPI.getProfile(id).then(profile => {
                    this.props.setAuthUserData(id, email, login, profile)
                })
            }
        })
}

    render () {
        return <Header {...this.props} />
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)
