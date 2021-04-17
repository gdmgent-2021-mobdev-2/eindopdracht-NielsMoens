import {useParams} from "react-router";
import useFetch from "../../../../../core/hooks/useFetch";
import {fetchProject} from "../../../../../core/modules/projects/api";
import {useCallback} from "react";
import LogOverview from "./Logs/LogOverview/LogOverview";
import Button from "../../../../Design/Button";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import Spinner from "../../../../Design/LoadingSpinner";
import Alert from "../../../../Design/Alert";
import {route, Routes} from "../../../../../core/routing/routing";
import {Link} from "react-router-dom";
import Image from "../../../../Design/Image";


const ProjectDetail = () => {
    const { id }= useParams();

    const apiCall = useCallback(()=>{
        return fetchProject(id)
    },[id])

    const {
        data: project,
        error,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) { return <Spinner/> }

    if (error) { return <Alert color='danger'>{error}</Alert> }

    return (
        <>
                {
                    project &&
                    <div className="container bg-white p-4 rounded-3">
                            <h1 className="my-4">{project.name}</h1>
                            <AdminContainer>
                                <Link to={route(Routes.ProjectsEdit, {id: project._id})}>
                                    <Button color='outline-dark'>
                                        Edit Project
                                    </Button>
                                </Link>

                                <Link to={route(Routes.ProjectsDetailAddLog, {id: project._id})}>
                                    <Button color='outline-dark'>
                                         Add Update
                                    </Button>
                                </Link>
                            </AdminContainer>
                        <div className="row">
                            <div className="col-md-8">
                                {project.img !== undefined ?
                                    <Image className={'card-img-top'}
                                           src={project.img}
                                           alt={'logo'}/> : ''}
                            </div>
                            <div className="col-md-4">
                                <h3 className="my-3">Project Description</h3>
                                <p>{project.description}</p>
                                <h3 className="my-3">Client</h3>
                                <ul>
                                    <li>name: {project.client.name}</li>
                                    <li>company: {project.client.company} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            <div className="container bg-white p-4 rounded-3">
                <AdminContainer>
                    <LogOverview projectId={id} />
                </AdminContainer>
            </div>
        </>
    )
}

export default ProjectDetail;