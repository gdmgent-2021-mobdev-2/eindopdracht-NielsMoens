import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import useFetch from '../../../../../core/hooks/UseFetch';
import Spinner from "../../../../Design/LoadingSpinner";
import Alert from "../../../../Design/Alert";


const ProjectsOverview = () => {
    // const {data: projects,error, isLoading}  = useFetch('/data.json');
    //
    // if (isLoading) {
    //     return <Spinner />;
    // }
    //
    // if (error) {
    //     return <Alert color="danger">{error}</Alert>;
    // }

    return (
       <>
            <h1>Projects Overview</h1>
           {/*{ projects.map((project) => (*/}
           {/*    <li key={project.id}>*/}
           {/*        <Link to={route(Routes.ProjectsDetail, {id: project.id})}>*/}
           {/*            {project.name}*/}
           {/*        </Link>*/}
           {/*    </li>*/}
           {/*))}*/}


       </>
    )
};

export default ProjectsOverview;