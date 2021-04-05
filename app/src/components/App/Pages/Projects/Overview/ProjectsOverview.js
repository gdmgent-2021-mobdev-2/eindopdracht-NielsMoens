import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import useFetch from '../../../../../core/hooks/UseFetch';
import Spinner from "../../../../Design/LoadingSpinner";
import Alert from "../../../../Design/Alert";
import UseFetch from "../../../../../core/hooks/UseFetch";
import LoadingSpinner from "../../../../Design/LoadingSpinner";


const ProjectsOverview = () => {
    const {
        data: projects,
        error,
        isLoading
    } = UseFetch('/projects');

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
               <li key={project.id}>
                   <Link to={route(Routes.ProjectsDetail, {id: project._id})}>
                       {project.name}
                   </Link>
               </li>
           ))}


       </>
    )
};

export default ProjectsOverview;