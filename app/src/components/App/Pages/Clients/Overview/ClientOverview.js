import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import {fetchClients} from "../../../../../core/modules/clients/api";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import useAdmin from "../../../../../core/hooks/useAdmin";


const ClientOverview = () => {
    const {
        data: clients,
        error,
        isLoading
    } = useFetch(fetchClients);

    const admin = useAdmin();

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }


    return (
        <>
            <h1>Clients</h1>
            <AdminContainer>
                <Link to={Routes.ClientsCreate}>Create client</Link>
            </AdminContainer>
            <ul>
                { clients.map((client) => (
                    <li key={client._id}>
                        {
                            admin ? <Link to={route(Routes.ClientsDetail, {id: client._id})}>{client.name}</Link>
                            : <p> {client.name}</p>
                        }
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ClientOverview