import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import Alert from "../../../../Design/Alert";
import LoadingSpinner from "../../../../Design/LoadingSpinner";
import useFetch from "../../../../../core/hooks/useFetch";
import {fetchProjects} from "../../../../../core/modules/projects/api";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";

const ProjectsOverview = () => {

    const {
        data: projects,
        error,
        isLoading
    } = useFetch(fetchProjects);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
       <>
                {/* TODO figure out a way to fetch all the project info in the detail page useContext idk? */}
            <h1>Projects Overview</h1>
            <AdminContainer>
                <Link to={Routes.ProjectsCreate}>Create Project</Link>
            </AdminContainer>
            <ul>
               {
                   projects.map(
                       (project) => (
                       <li key={project._id}>
                           <Link to={route(Routes.ProjectsDetail, {id: project._id})}>
                               {project.name}
                           </Link>
                       </li>
                     )
                   )
               }
            </ul>
       </>
    )
};



export default ProjectsOverview;