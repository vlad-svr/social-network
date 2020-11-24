import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from "../redux/redux-store";


function mapStateToPropsForRedirect(state: AppStateType) {
    return {
        isAuth: state.auth.isAuth
    }
}

type MapStatePropsType = ReturnType<typeof mapStateToPropsForRedirect>

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    function RedirectComponent(props: MapStatePropsType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>
        return <WrappedComponent {...restProps as WCP} />;
    }

    return connect<MapStatePropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}
