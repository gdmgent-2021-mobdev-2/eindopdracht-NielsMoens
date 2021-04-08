import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../../core/routing/routing";

const ClientDetail = ({ client }) => {
    return (
        <>
            <h1>Client Details</h1>
            <p>Name: {client.name} </p>
            <p>Email: {client.email} </p>
            <p>Company: {client.company} </p>

            <Link to={route(Routes.ClientsEdit, {id: client._id})}>
                Edit client
            </Link>
        </>
    )
}

export default ClientDetail;