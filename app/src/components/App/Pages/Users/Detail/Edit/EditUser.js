import useAuthApi from "../../../../../../core/hooks/useAuthApi";
import {useHistory} from "react-router";
import {useState} from "react";

import {route, Routes} from "../../../../../../core/routing/routing";
import ErrorAlert from "../../../../../Shared/ErrorAlert";
import {updateUser} from "../../../../../../core/modules/Users/api";
import UserUpdateForm from "./Form/UserUpdateForm";

const EditUser = ({ user , onUpdate}) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updateUser(data))
            .then((data) => {
            onUpdate(data);
                history.push(
                    route(Routes.UsersDetail, {
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
            <h1>Edit User</h1>
            <ErrorAlert error={error}></ErrorAlert>

            <UserUpdateForm
                onSubmit={handleSubmit}
                initialData={user}
                disabled={isLoading}
            />
        </>
    )
}
export default EditUser;