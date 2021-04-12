
import useAuthApi from "../../../../../core/hooks/useAuthApi";
import {useHistory} from "react-router";
import {useState} from "react";
import { updateProject } from "../../../../../core/modules/projects/api";
import {route, Routes} from "../../../../../core/routing/routing";
import ErrorAlert from "../../../../Shared/ErrorAlert";
import ProjectForm from "../Form/ProjectForm";

const EditProject = ({ project , onUpdate}) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updateProject(data))
            .then((data) => {
            onUpdate(data);
                history.push(
                    route(Routes.ProjectsDetail, {
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
            <h1>Edit project</h1>
            <ErrorAlert error={error}></ErrorAlert>

            <ProjectForm
                onSubmit={handleSubmit}
                initialData={project}
                disabled={isLoading}
            />

        </>
    )
}
export default EditProject;