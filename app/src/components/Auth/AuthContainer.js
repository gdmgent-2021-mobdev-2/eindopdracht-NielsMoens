import App from "../App/App";
import {Component, useState} from 'react';
import {Routes} from "../../core/routing/routing";
import LoginPage from '../App/Pages/Login/LoginPage'
import {Redirect, Route, Switch} from "react-router-dom";

const AuthProvider = () => {
    const [user, setUser] = useState();

    if (user) {
        return (
            <>
                {console.log(user)}
                <App />
            </>
        );
    }
    return (
        <Switch>
            <Route path={Routes.Login}>
                <LoginPage setUser={setUser} />
            </Route>
            <Redirect to={Routes.Login} />
        </Switch>
    )
};

export default AuthProvider;
