import { Route, Switch, Redirect } from 'react-router-dom';
import Projects from "./Pages/Projects/Project";
import Clients from "./Pages/Clients/Clients";
import { Routes } from "../../core/routing/routing";
import Reviews from "./Pages/Reviews/Reviews";
import User from "./Pages/Users/User";
import useFetch from "../../core/hooks/useFetch";
import {fetchStarredItems} from "../../core/modules/StarredProject/api";
import Spinner from "../Design/LoadingSpinner";
import Alert from "../Design/Alert";
import {createContext, useContext} from "react";

const StarredItems = createContext();

const MainRouting = () => {
    const {
        data: starredItems,
        setData: setStarredItems,
        error,
        isLoading
    } = useFetch(fetchStarredItems);

    if (isLoading) {
        return <Spinner/>
    }

    if (error) {
        return <Alert color='danger'>{error}</Alert>
    }
    return (
        <StarredItems.Provider value={{starredItems, setStarredItems}}>
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
        </StarredItems.Provider>
    );
};
const useStarredProjects= () => {
    return useContext(StarredItems);
}

export {
    useStarredProjects
}

export default MainRouting;