import ClientForm from "./Form/ClientForm";
import useAuthApi from "../../../../../core/hooks/useAuthApi";
import { useHistory } from "react-router";
import { useState } from "react";
import { createClient } from "../../../../../core/modules/clients/api";
import { Routes } from "../../../../../core/routing/routing";
import ErrorAlert from "../../../../Shared/ErrorAlert";

const CreateClient = () => {
  const withAuth = useAuthApi();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const handleSubmit = (data) => {
    setIsLoading(true);
    withAuth(createClient(data))
      .then(() => {
        history.push(Routes.Clients);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>Create Client</h1>
      <ErrorAlert error={error}></ErrorAlert>
      <ClientForm onSubmit={handleSubmit} disabled={isLoading} />
    </>
  );
};
export default CreateClient;
