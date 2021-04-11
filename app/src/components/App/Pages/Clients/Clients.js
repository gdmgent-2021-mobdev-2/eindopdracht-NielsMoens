import ClientOverview from "./Overview/ClientOverview";
import {Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "../../../../core/routing/routing";
import CreateClient from './Create/CreateClient'
import ClientDetailContainer from "./Detail/ClientDetailContainer";
import AdminRoute from "../../../Shared/Admin/AdminRoute";

const Clients  = () => {
    return(
        <>
            <Switch>
                <AdminRoute path={Routes.ClientsCreate}>
                    <CreateClient />
                </AdminRoute>
                <Route path={Routes.ClientsDetail}>
                    <ClientDetailContainer />
                </Route>
                <Route path={Routes.Clients}>
                    <ClientOverview />
                </Route>
                <Redirect to={Routes.Clients}/>
            </Switch>
        </>
    )
}
export default Clients