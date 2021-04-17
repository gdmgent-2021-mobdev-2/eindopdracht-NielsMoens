import UserForm from "./Form/UserForm";
import useAuthApi from "../../../../../core/hooks/useAuthApi";
import { useHistory } from "react-router";
import { useState } from "react";
import { createClient } from "../../../../../core/modules/clients/api";
import { Routes } from "../../../../../core/routing/routing";
import ErrorAlert from "../../../../Shared/ErrorAlert";
import { createUsers } from "../../../../../core/modules/Users/api";

const CreateUser = () => {
  const withAuth = useAuthApi();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const handleSubmit = (data) => {
    setIsLoading(true);
    withAuth(createUsers(data))
      .then(() => {
        history.push(Routes.Users);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>Create User</h1>
      <ErrorAlert error={error}></ErrorAlert>
      <UserForm onSubmit={handleSubmit} disabled={isLoading} />
    </>
  );
};
export default CreateUser;
