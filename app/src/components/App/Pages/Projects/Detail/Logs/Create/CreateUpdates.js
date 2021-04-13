import LogForm from "../Form/UpdateForm";
import useAuthApi from "../../../../../../../core/hooks/useAuthApi";
import {useHistory} from "react-router";
import {useState} from "react";
import {Routes} from "../../../../../../../core/routing/routing";
import ErrorAlert from "../../../../../../Shared/ErrorAlert";
import {createLogByProject} from "../../../../../../../core/modules/logs/api";

const CreateUpdate = ({project}) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createLogByProject(project.id, data))
            .then(() => {
                history.push(Routes.Projects);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    return (
        <>
            <h1>Create Update</h1>
            <ErrorAlert error={error}></ErrorAlert>
            <LogForm onSubmit={handleSubmit} disabled={isLoading} />
        </>
    )
}
export default CreateUpdate;