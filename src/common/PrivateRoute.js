import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * login 사용자가 인증없이 보호된 페이지에 엑세스하려고 하는 경우 리디렉션
 */
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authenticated ? (
                <Component {...rest} {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                />
            )
        }
    />
);

export default PrivateRoute;
