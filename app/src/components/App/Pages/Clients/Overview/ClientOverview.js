import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import {fetchClients} from "../../../../../core/modules/clients/api";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import useAdmin from "../../../../../core/hooks/useAdmin";
import Button from "../../../../Design/Button";


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
            <p></p>
            <AdminContainer>
                <Link to={Routes.ClientsCreate}>
                    <Button color='outline-dark'>Create client</Button>
                </Link>
            </AdminContainer>
                { clients.map((client) => (
                    <div key={client._id} className=" my-3">
                        {
                            admin ? <Link className="list-group-item list-group-item-action" to={route(Routes.ClientsDetail, {id: client._id})}>{client.name}</Link>
                                : <span className="list-group-item"> {client.name}</span>
                        }
                    </div>
                ))}
        </>
    )
};

export default ClientOverview