import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";


const ProjectsOverview = () => {
    return (
       <>
            <h1>Projects test</h1>
            <Link to={route(Routes.ProjectsDetail, {id: 1})}>Project 1</Link>
       </>
    )
};

export default ProjectsOverview;