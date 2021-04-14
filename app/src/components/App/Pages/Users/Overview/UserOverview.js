import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import {fetchClients} from "../../../../../core/modules/clients/api";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import useAdmin from "../../../../../core/hooks/useAdmin";
import Button from "../../../../Design/Button";
import { fetchUsers} from "../../../../../core/modules/Users/api";


const UserOverview = () => {
    const {
        data: users,
        error,
        isLoading
    } = useFetch(fetchUsers);

    const admin = useAdmin();

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <h1> Users </h1>
            <AdminContainer>
                <Link to={Routes.UsersCreate}>
                    <Button color='outline-dark'>Create User</Button>
                </Link>
            </AdminContainer>
            { users.map((user) => (
                <div className="list-group m-4">
                    {
                        admin ? <Link className="list-group-item list-group-item-action" to={route(Routes.UsersDetail, {id: user.id})}>{user.email}</Link>
                            : <p> {user.name}</p>
                    }
                </div>
            ))}
        </>
    )
};

export default UserOverview