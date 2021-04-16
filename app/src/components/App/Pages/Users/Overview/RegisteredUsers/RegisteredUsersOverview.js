import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../../core/routing/routing";
import AdminContainer from "../../../../../Shared/Admin/AdminContainer";

const RegisteredUsersOverview = ({users}) =>{
    return(

        <div className="py-4">
            <h3>Registered Users</h3>
            { users.map((u) => (
                <div className="list-group py-1">
                    {
                        <div className="card" >
                            <img className="card-img-top" src={u.img} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{u.name} </h5>
                            </div>
                            <Link className="list-group-item list-group-item-action" to={route(Routes.UsersDetail, {id: u.id})}>{u.email}</Link>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}
export  default  RegisteredUsersOverview