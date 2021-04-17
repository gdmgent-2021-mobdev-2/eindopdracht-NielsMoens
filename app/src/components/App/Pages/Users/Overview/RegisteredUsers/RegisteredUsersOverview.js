import { Link } from "react-router-dom";
import { route, Routes } from "../../../../../../core/routing/routing";
import Image from "../../../../../Design/Image";

const RegisteredUsersOverview = ({ users }) => {
  return (
    <div className="py-4">
      <h1>Registered Users</h1>
      <div className="card-group">
        <div className="row">
          {users.map((u) => (
            <div key={u._id} className="card col-sm-3 m-2">
              {
                <Image
                  className={"card-img-top mt-2"}
                  src={
                    u.img !== undefined
                      ? u.img
                      : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  }
                  alt={"logo"}
                />
              }

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <Link to={route(Routes.UsersDetail, { id: u._id })}>
                    <h5 className="card-title text-dark"> {u.name}</h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RegisteredUsersOverview;
