import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import { Link } from "react-router-dom";
import { route, Routes } from "../../../../../core/routing/routing";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import useAdmin from "../../../../../core/hooks/useAdmin";
import Button from "../../../../Design/Button";
import { fetchUsers } from "../../../../../core/modules/Users/api";
import { useAuth } from "../../../../Auth/AuthProvider";
import RegisteredUsersOverview from "./RegisteredUsers/RegisteredUsersOverview";
import StarredItemsOverview from "./StarredItems/StarredItemsOverview";
import UserDetail from "../Detail/DetailPage/UserDetail";

const UserOverview = () => {
  const { user } = useAuth();

  const { data: users, error, isLoading } = useFetch(fetchUsers);

  const admin = useAdmin();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>;
  }

  return (
    <>
      <div className="container ">
        <div className="col-lg-12 my5">
          <h1> Profile Info </h1>
          <AdminContainer>
            <Link to={Routes.UsersCreate}>
              <Button color="outline-dark">Create User</Button>
            </Link>
          </AdminContainer>
          <UserDetail user={user} />
        </div>
        <div className="col-lg-12 my-4">
          <AdminContainer>
            <RegisteredUsersOverview users={users} />
          </AdminContainer>
          <StarredItemsOverview user={user} />
        </div>
      </div>
    </>
  );
};

export default UserOverview;
