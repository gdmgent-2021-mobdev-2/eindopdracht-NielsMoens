import React from 'react';
import Header from "./Header/Header";
import {AuthContext, useAuth} from "../Auth/AuthProvider";
import MainRouting from "./MainRouting";


const App = () => {
    //by importing useAuth we can access the user & setUser form anywhere beneath this now
    // const {user, setUser} = useAuth();
    return(
        <>
            <Header />
            <main className="container-fluid">
                    <MainRouting />
            </main>
        </>
    );
  };

export default App;