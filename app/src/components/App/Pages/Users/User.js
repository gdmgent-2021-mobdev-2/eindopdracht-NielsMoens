import UserOverview from "./Overview/UserOverview";
import {Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "../../../../core/routing/routing";
import CreateUser from './Create/CreateUser'
import UserDetailContainer from "./Detail/UserDetailContainer";
import AdminRoute from "../../../Shared/Admin/AdminRoute";

const Users  = () => {
    return(
        <>
            <Switch>
                <AdminRoute path={Routes.UsersCreate}>
                    <CreateUser />
                </AdminRoute>
                <Route path={Routes.UsersDetail}>
                    <UserDetailContainer />
                </Route>
                <Route path={Routes.Users}>
                    <UserOverview />
                </Route>
                <Redirect to={Routes.Users}/>
            </Switch>
        </>
    )
}
export default Users