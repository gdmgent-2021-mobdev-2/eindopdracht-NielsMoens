import { Link } from "react-router-dom";
import { route, Routes } from "../../../../../../core/routing/routing";

const ClientDetail = ({ client }) => {
  return (
    <>
      <h1>Client Details</h1>
      <div className="card " style={{ width: "400px" }}>
        <img
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="Card image"/>
        <div className="card-body">
          <h4 className="card-text">{client.name} </h4>
          <p className="card-text">Email: {client.email} </p>
          <p className="card-text">Company: {client.company} </p>
          <Link
            className="btn btn-outline-warning"
            to={route(Routes.ClientsEdit, { id: client._id })}
          >
            ✏️ Edit client
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClientDetail;
