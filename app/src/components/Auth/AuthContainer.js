import {Component, useState, createContext, useContext} from 'react';
import App from "../App/App";
import {Routes} from "../../core/routing/routing";
import LoginPage from '../App/Pages/Login/LoginPage'
import {Redirect, Route, Switch} from "react-router-dom";
import storage from "../../core/storage";

const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState(storage.getUser())

    const updateUser = (user) => {
        storage.storeUser(user)
        setUser(user);
    }

    if (user) {
        return (
            <AuthContext.Provider value={{user, setUser: updateUser}}>
                <App />
            </AuthContext.Provider>
        );
    }
    return (
        <Switch>
            <Route path={Routes.Login}>
                <LoginPage setUser={updateUser()} />
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
