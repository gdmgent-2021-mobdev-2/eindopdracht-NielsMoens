import {Component, useState, createContext, useContext} from 'react';
import App from "../App/App";
import {Routes} from "../../core/routing/routing";
import LoginPage from '../App/Pages/Login/LoginPage'
import {Redirect, Route, Switch} from "react-router-dom";
import storage from "../../core/storage";

const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState(storage.getUser());

    const updateAuth = (user) => {
        storage.storeUser(user)
        setUser(user);
    }

    const logout = () => {
        updateAuth(null);
    }

    if (user) {
        return (
            <AuthContext.Provider value={{user, logout}}>
                <App />
            </AuthContext.Provider>
        );
    }
    return (
        <Switch>
            <Route path={Routes.Login}>
                <LoginPage setUser={updateAuth} />
            </Route>
            <Redirect to={Routes.Login} />
        </Switch>
    )
};

// by using useContext we can access the user&setUser in all the files all the files above
const useAuth = () => {
    return useContext(AuthContext);
}
export {
    useAuth,
}

export default AuthProvider;
