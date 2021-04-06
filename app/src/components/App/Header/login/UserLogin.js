import React from 'react';
import Button from "../../../Design/Button";
import {useAuth} from "../../../Auth/AuthContainer";

const UserLogin = () =>{
    const {user, setUser} = useAuth();
    return (
        <ul className="navbar-nav px-3">
            <a className="nav-link" href="#">{user.email}</a>
            <li className="nav-item text-nowrap">
                <Button color="outline-dark">Sign out</Button>
            </li>
        </ul>
    )
}

export default UserLogin;
