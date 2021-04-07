import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import Alert from "../../../../Design/Alert";
import LoadingSpinner from "../../../../Design/LoadingSpinner";
import useFetch from "../../../../../core/hooks/useFetch";

const ProjectsOverview = () => {
    const {
        data: projects,
        error,
        isLoading
    } = useFetch('/projects');

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }
    return (
       <>
            <h1>Projects Overview</h1>
           { projects.map((project) => (
               <li key={project._id}>
                   <Link to={route(Routes.ProjectsDetail, {id: project._id})}>
                       {project.name}
                   </Link>
               </li>
           ))}


       </>
    )
};

export default ProjectsOverview;