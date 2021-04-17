import {Link, useHistory} from "react-router-dom";
import {route, Routes} from "../../../../../../core/routing/routing";
import {deleteUser} from "../../../../../../core/modules/Users/api";
import useAuthApi from "../../../../../../core/hooks/useAuthApi";

const UserDetail = ({ user }) => {
    const withAuth = useAuthApi();

    const handleDelete = () => {
        withAuth(deleteUser(user._id))
        window.location.replace(route(Routes.Users));
    };

    return (
        <>
            <h1>User Details</h1>
            <div className="card " style={{width:"400px"}}>
                <img className="card-img-top" src={user.img !== undefined ? user.img : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" } alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-text">{user.name} </h4>
                    <p className="card-text">Email: {user.email} </p>
                    <p className="card-text">Role: {user.role} </p>
                    <Link className="btn btn-primary" to={route(Routes.UsersEdit, {id: user._id})}>
                        Edit User
                    </Link>
                    <Link className="btn btn-danger" to={route(Routes.UsersDelete, {id: user._id})} onClick={handleDelete}>
                        Delete User
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UserDetail;