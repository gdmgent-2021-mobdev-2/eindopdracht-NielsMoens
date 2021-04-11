import ClientForm from "../../Create/Form/ClientForm";
import useAuthApi from "../../../../../../core/hooks/useAuthApi";
import {useHistory} from "react-router";
import {useState} from "react";
import { updateClient } from "../../../../../../core/modules/clients/api";
import {route, Routes} from "../../../../../../core/routing/routing";
import ErrorAlert from "../../../../../Shared/ErrorAlert";

const EditClient = ({ client , onUpdate}) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updateClient(data))
            .then((data) => {
            onUpdate(data);
                history.push(
                    route(Routes.ClientsDetail, {
                        id: data._id,
                    })
                );
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };


    return (
        <>
            <h1>Edit Client</h1>
            <ErrorAlert error={error}></ErrorAlert>

            <ClientForm
                onSubmit={handleSubmit}
                initialData={client}
                disabled={isLoading}
            />

        </>
    )
}
export default EditClient;