import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import {fetchClients} from "../../../../../core/modules/clients/api";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";

const ClientOverview = () => {
    const {
        data: clients,
        error,
        isLoading
    } = useFetch(fetchClients);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <h1>Clients</h1>

            <Link to={Routes.ClientsCreate}>Create client</Link>
            <ul>
                { clients.map((client) => (
                    <li key={client._id}>
                        {console.log(client.id)}
                        <Link to={route(Routes.ClientsDetail, {id: client._id })}>
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ClientOverview