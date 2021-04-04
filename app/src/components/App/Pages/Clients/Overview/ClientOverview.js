import UseFetch from "../../../../../core/hooks/UseFetch";
import Alert from "../../../../Design/Alert";
import LoadingSpinner from "../../../../Design/LoadingSpinner";

const ClientOverview = () => {
    const {
        data: clients,
        error,
        isLoading
    } = UseFetch('/clients');

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