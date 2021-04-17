import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
import Alert from "../../../../Design/Alert";
import LoadingSpinner from "../../../../Design/LoadingSpinner";
import useFetch from "../../../../../core/hooks/useFetch";
import {fetchProjects} from "../../../../../core/modules/projects/api";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import Image from "../../../../Design/Image";
import Button from "../../../../Design/Button";
import SaveItem from "../../Starred/SaveItem";
import PageFilter from "../../../../Shared/Pagination/PageFilter";
import Pagination from "../../../Pagination/Pagination";

const ProjectsOverview = ({project, onUpdate}) => {
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
            <h1>Projects Overview</h1>
            <AdminContainer>
                <Link to={Routes.ProjectsCreate}>
                    <Button color='outline-dark'>Create Project</Button></Link>
            </AdminContainer>
           <div className="card-group">
                <Pagination projects={projects}/>
           </div>
       </>
    )
};

export default ProjectsOverview;