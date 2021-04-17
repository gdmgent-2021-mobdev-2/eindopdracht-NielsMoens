import { useCallback } from "react";
import { useParams } from "react-router";
import useFetch from "../../../../../core/hooks/useFetch";
import { fetchClient } from "../../../../../core/modules/clients/api";
import Spinner from "../../../../Design/LoadingSpinner";
import Alert from "../../../../Design/Alert";
import { Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "../../../../../core/routing/routing";
import EditUser from "./Edit/EditUser";
import UserDetail from "./DetailPage/UserDetail";
import AdminRoute from "../../../../Shared/Admin/AdminRoute";
import { fetchUser } from "../../../../../core/modules/Users/api";

const UserDetailContainer = () => {
  const { id } = useParams();

  const apiCall = useCallback(() => {
    return fetchUser(id);
  }, [id]);

  const { data: user, error, setData, isLoading } = useFetch(apiCall);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>;
  }

  if (user) {
    return (
      <>
        <Switch>
          <Route path={Routes.UsersEdit}>
            <EditUser user={user} onUpdate={(data) => setData(data)} />
          </Route>
          <Route path={Routes.UsersDetail}>
            <UserDetail user={user} />
          </Route>
          <Redirect to={Routes.Users} />
        </Switch>
      </>
    );
  }
};
export default UserDetailContainer;
