import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import { checkAuthenticated, useAuthState, useAuthDispatch } from '../context';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
    const authState = useAuthState()
    console.log('authState', authState)

    const dispatch = useAuthDispatch()

    useEffect(() => {
        (async () => {
            console.log('fetchUser trigger')
            try {
                await checkAuthenticated(dispatch);
            } catch (err) {
                console.log(err)
            }
        })();

    }, [dispatch]);

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