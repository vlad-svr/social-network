import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToPropsForRedirect(state) {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect(WrappedComponent, props) {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />
            return <WrappedComponent {...this.props} />;
        }
    };

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}