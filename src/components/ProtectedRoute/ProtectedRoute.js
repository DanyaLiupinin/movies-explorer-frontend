/*

import React from "react";
import { Route } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
        <div>
            {() =>
                props.loggedIn ? <Component {...props} /> : <Portfolio />
                //<Redirect to='./signin' />
            }
        </div>

    )
}

export default ProtectedRoute

*/