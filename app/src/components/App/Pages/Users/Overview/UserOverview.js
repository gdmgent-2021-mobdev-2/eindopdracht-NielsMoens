import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import useAdmin from "../../../../../core/hooks/useAdmin";
import Button from "../../../../Design/Button";
import { fetchUsers} from "../../../../../core/modules/Users/api";
import {useAuth} from "../../../../Auth/AuthProvider";
import RegisteredUsersOverview from "./RegisteredUsers/RegisteredUsersOverview";
import StarredItemsOverview from "./StarredItems/StarredItemsOverview";


const UserOverview = () => {
    const {user} = useAuth();

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
            <div className="m-4">

                <h1> Edit Profile Info </h1>
                <AdminContainer>
                    <Link to={Routes.UsersCreate}>
                        <Button color='outline-dark'>Create User</Button>
                    </Link>
                </AdminContainer>
                <div className="card " style={{width:"400px"}}>
                    <img className="card-img-top" src={user.img} alt="Card image"></img>
                    <div className="card-body">
                        <h4 className="card-text">{user.name} </h4>
                        <p className="card-text">Email: {user.email} </p>
                        <p className="card-text">Role: {user.role} </p>
                        <Link className="btn btn-primary" to={route(Routes.UsersEdit, {id: user._id})}>
                            Edit User
                        </Link>
                    </div>
                </div>
                <StarredItemsOverview user={user} />
                <AdminContainer>
                    <RegisteredUsersOverview users={users}/>
                </AdminContainer>
            </div>
        </>
    )
};

export default UserOverview