import {Redirect, Route, Switch} from "react-router-dom";
import ProjectDetail from "./Detail/ProjectDetail";
import {Routes} from "../../../../core/routing/routing";
import ProjectsOverview from "../Projects/Overview/ProjectsOverview"
import AdminRoute from "../../../Shared/Admin/AdminRoute";
import CreateProject from "./Create/CreateProject";
import ProjectDetailContainer from "./Detail/ProjectDetailContainer";

const Projects = () => {
    return(
        <>
            <Switch>
                <AdminRoute path={Routes.ProjectsCreate}>
                    <CreateProject />
                </AdminRoute>
                <Route path={Routes.ProjectsDetail}>
                    <ProjectDetailContainer/>
                </Route>
                <Route path={Routes.Projects}>
                        <ProjectsOverview />
                </Route>
                <Redirect to={Routes.Projects}/>
            </Switch>
        </>
    )
}
export default Projects