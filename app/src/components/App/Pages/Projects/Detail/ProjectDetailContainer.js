import {useParams} from "react-router";
import useFetch from "../../../../../core/hooks/useFetch";
import {fetchProject} from "../../../../../core/modules/projects/api";
import {useCallback} from "react";
import Spinner from "../../../../Design/LoadingSpinner";
import Alert from "../../../../Design/Alert";
import AdminRoute from "../../../../Shared/Admin/AdminRoute";
import {Routes} from "../../../../../core/routing/routing";
import {Redirect, Route, Switch} from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import EditProject from "../Edit/EditProject";
import CreateUpdate from "./Logs/Create/CreateUpdates";

const ProjectDetailContainer = ({ }) => {
    const { id }= useParams();

    const apiCall = useCallback(()=>{
        return fetchProject(id)
    },[id])

    const {
        data: project,
        error,
        setData,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) {
        return <Spinner/>
    }

    if (error) {
        return <Alert color='danger'>{error}</Alert>
    }

    return (
        <>
            <Switch>
                <AdminRoute path={Routes.ProjectsEdit}>
                    <EditProject project={project} onUpdate={(data) => setData(data)} />
                </AdminRoute>
                <AdminRoute path={Routes.ProjectsDetailAddLog}>
                    <CreateUpdate  project={project} />
                </AdminRoute>
                <Route path={Routes.ProjectsDetail}>
                    <ProjectDetail project={project} />
                </Route>
                <Redirect to={Routes.Projects}/>
            </Switch>
        </>
    )
};

export default ProjectDetailContainer;