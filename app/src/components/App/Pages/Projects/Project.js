import {Redirect, Route, Switch} from "react-router-dom";
import ProjectDetail from "./Detail/ProjectDetail";
import {Routes} from "../../../../core/routing/routing";
import ProjectsOverview from "../Projects/Overview/ProjectsOverview"

const Projects = ({}) => {
    return(
        <>
            <Switch>
                <Route path={Routes.ProjectsDetail}>
                    <ProjectDetail/>
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