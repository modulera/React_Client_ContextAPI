import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from '../context'

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
    const authState = useAuthState()
    // console.log('authState', authState)

    return (
        <Route
            path={path}
            render={props =>
                isPrivate && !Boolean(authState.accessToken) ? (
                    <Redirect
                        to={{ pathname: "/login" }}
                    />
                ) : (
                    <Component {...props} />
                )
            }
            {...rest}
        />
    )
}

export default AppRoutes