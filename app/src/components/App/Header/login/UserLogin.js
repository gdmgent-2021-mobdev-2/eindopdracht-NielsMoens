import React from 'react';
import Button from "../../../Design/Button";
import {useAuth} from "../../../Auth/AuthProvider";
import LogoutButton from "./LogoutButton";
import {Link} from "react-router-dom";
import {Routes} from "../../../../core/routing/routing";

const UserLogin = () =>{
    const {user, setUser} = useAuth();

    return (
        <ul className="navbar-nav px-3">
            <Link className="nav-link" to={Routes.Users}>{user.email}</Link>
            <li className="nav-item text-nowrap">
                <LogoutButton />
            </li>
        </ul>
    )
}

export default UserLogin;
