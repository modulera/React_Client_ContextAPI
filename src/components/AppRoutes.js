import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState, useAuthDispatch, checkAuthenticated } from '../context'

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
    const authState = useAuthState()
    // console.log('AuthState', authState)

    // const dispatch = useAuthDispatch()
    // const fetchUser = async () => {
    //     console.log('fetchUser trigger')
    //     try {
    //         await checkAuthenticated(dispatch);
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // // if (!authState.isAuthenticated) fetchUser()

    // useEffect(() => {
    //     console.log('useEffect trigger')
    //     if (!authState.isAuthenticated) fetchUser()
    // }, [authState.isAuthenticated]);


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