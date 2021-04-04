import React from 'react';
import Header from "./Header/Header";
import MainRouting from "./MainRouting";

const App = () => {
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