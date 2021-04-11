
import useAuthApi from "../../../../../core/hooks/useAuthApi";
import {useHistory} from "react-router";
import {useState} from "react";
import {createProject} from "../../../../../core/modules/projects/api";
import {Routes} from "../../../../../core/routing/routing";
import ErrorAlert from "../../../../Shared/ErrorAlert";
import ProjectForm from "../Form/ProjectForm";

const CreateProject = () => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createProject(data))
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
            <h1>Create Project</h1>
            <ErrorAlert error={error}></ErrorAlert>
            <ProjectForm onSubmit={handleSubmit} disabled={isLoading} />
        </>
    )
}
export default CreateProject;