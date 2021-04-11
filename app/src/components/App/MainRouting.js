import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import Projects from "./Pages/Projects/Project";
import Clients from "./Pages/Clients/Clients";
import { Routes } from "../../core/routing/routing";
import Reviews from "./Pages/Reviews/Reviews";

const MainRouting = () => {
    return (
        <Switch>
            <Route path={Routes.Home}>
                <Home />
            </Route>
            <Route path={Routes.Services}>
                <Services />
            </Route>
            <Route path={Routes.Projects}>
                <Projects />
            </Route>
            <Route path={Routes.Clients}>
                <Clients />
            </Route>
            <Route path={Routes.Reviews}>
                <Reviews />
            </Route>
            <Route path={Routes.UserDashboard}>
                <UserDashboard />
            </Route>
            <Redirect to={Routes.Home}/>
        </Switch>
    );
};

export default MainRouting;