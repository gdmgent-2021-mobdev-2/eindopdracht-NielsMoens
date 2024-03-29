import { useCallback } from "react";
import { useParams } from "react-router";
import useFetch from "../../../../../core/hooks/useFetch";
import { fetchClient } from "../../../../../core/modules/clients/api";
import Spinner from "../../../../Design/LoadingSpinner";
import Alert from "../../../../Design/Alert";
import { Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "../../../../../core/routing/routing";
import EditClient from "./Edit/EditClient";
import ClientDetail from "./DetailPage/ClientDetail";
import AdminRoute from "../../../../Shared/Admin/AdminRoute";

const ClientDetailContainer = () => {
  const { id } = useParams();

  const apiCall = useCallback(() => {
    return fetchClient(id);
  }, [id]);

  const { data: client, error, setData, isLoading } = useFetch(apiCall);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>;
  }

  if (client) {
    return (
      <>
        <Switch>
          <AdminRoute path={Routes.ClientsEdit}>
            <EditClient client={client} onUpdate={(data) => setData(data)} />
          </AdminRoute>
          <Route path={Routes.ClientsDetail}>
            <ClientDetail client={client} />
          </Route>
          <Redirect to={Routes.Clients} />
        </Switch>
      </>
    );
  }
};
export default ClientDetailContainer;
