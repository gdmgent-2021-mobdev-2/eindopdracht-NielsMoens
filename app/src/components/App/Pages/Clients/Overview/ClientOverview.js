import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import LoadingSpinner from "../../../../Design/LoadingSpinner";
import {fetchClients} from "../../../../../core/modules/clients/api";

const ClientOverview = () => {
    const {
        data: clients,
        error,
        isLoading
    } = useFetch(fetchClients);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <h1>Clients</h1>
            <ul>
                { clients.map((client) => (
                    <li key={client._id}>
                        {client.firstName} {client.lastName}
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ClientOverview