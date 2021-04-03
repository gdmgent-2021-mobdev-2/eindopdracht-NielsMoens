import React from 'react';
import Button from "../../../Design/Button";

const UserLogin = () =>{
    return (
        <ul className="navbar-nav px-3">
            <a className="nav-link" href="#">Username</a>
            <li className="nav-item text-nowrap">
                <Button color="outline-dark flex end">Sign out</Button>
            </li>
        </ul>
    )
}

export default UserLogin;
