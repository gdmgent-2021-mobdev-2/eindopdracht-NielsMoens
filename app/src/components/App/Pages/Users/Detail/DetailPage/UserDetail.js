import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../../core/routing/routing";

const UserDetail = ({ user }) => {
    console.log(user)
    return (
        <>
            <h1>User Details</h1>
            <div className="card " style={{width:"400px"}}>
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Card image"></img>
                <div className="card-body">
                    <h4 className="card-text">{user.email} </h4>
                    <p className="card-text">Email: {user.role} </p>
                    <Link className="btn btn-primary" to={route(Routes.UsersEdit, {id: user._id})}>
                        Edit User
                    </Link>
                    <Link className="btn btn-danger" to={route(Routes.UsersDelete, {id: user._id})}>
                    Delete User
                </Link>
                </div>
            </div>
        </>
    )
}

export default UserDetail;