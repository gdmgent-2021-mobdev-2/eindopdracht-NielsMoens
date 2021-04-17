import React from 'react';
import Header from "./Header/Header";
import {AuthContext, useAuth} from "../Auth/AuthProvider";
import MainRouting from "./MainRouting";

const App = () => {
    return(
        <>
            <Header />
            <div className="container ">
                <div className="col-lg-12 my5">
                    <main className="container-fluid wrapper">
                            <MainRouting />
                    </main>
                </div>
            </div>
        </>
    );
  };

export default App;