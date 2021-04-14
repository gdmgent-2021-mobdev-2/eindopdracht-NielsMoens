import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Project";
import Clients from "./Pages/Clients/Clients";
import { Routes } from "../../core/routing/routing";
import Reviews from "./Pages/Reviews/Reviews";
import UserOverview from "./Pages/Users/Overview/UserOverview";
import User from "./Pages/Users/User";

const MainRouting = () => {
    return (
        <Switch>
            <Route path={Routes.Projects}>
                <Projects />
            </Route>
            <Route path={Routes.Clients}>
                <Clients />
            </Route>
            <Route path={Routes.Reviews}>
                <Reviews />
            </Route>
            <Route path={Routes.Users}>
                <User />
            </Route>
            <Redirect to={Routes.Projects}/>
        </Switch>
    );
};

export default MainRouting;