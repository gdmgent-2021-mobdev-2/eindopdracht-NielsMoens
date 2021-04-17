import React from 'react';
import {useAuth} from "../../../Auth/AuthProvider";
import LogoutButton from "./LogoutButton";
import {Link} from "react-router-dom";
import {Routes} from "../../../../core/routing/routing";


const UserLogin = () =>{
    const {user, setUser} = useAuth();

    return (
        <>
            <li>
              <Link className="nav-link" to={Routes.Users}>{user.email}</Link>
            </li>
            <li className="logout">
              <LogoutButton/>
            </li>
        </>

    )
}

export default UserLogin;
