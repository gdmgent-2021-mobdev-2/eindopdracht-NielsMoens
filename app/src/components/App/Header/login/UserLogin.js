import React from 'react';
import Button from "../../../Design/Button";
import {useAuth} from "../../../Auth/AuthProvider";
import LogoutButton from "./LogoutButton";

const UserLogin = () =>{
    const {user, setUser} = useAuth();

    return (
        <ul className="navbar-nav px-3">
            <a className="nav-link" href="#">{user.email}</a>
            <li className="nav-item text-nowrap">
                <LogoutButton />
            </li>
        </ul>
    )
}

export default UserLogin;
