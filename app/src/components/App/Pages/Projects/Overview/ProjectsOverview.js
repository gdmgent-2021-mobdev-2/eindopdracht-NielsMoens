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
                {/* TODO figure out a way to fetch all the project info in the detail page useContext idk? */}
            <h1>Projects Overview</h1>
            <AdminContainer>
                <Link to={Routes.ProjectsCreate}>
                    <Button color='outline-dark'>Create Project</Button></Link>
            </AdminContainer>
           <div className="card-group">
               {
                   projects.map(
                       (project) => (
                           <div key={project._id} className="col-sm-3 mb-4">
                               <div className="card m-4">
                                   <Image className={'card-img-top'}
                                          src={'https://media.discordapp.net/attachments/609454665272393736/831269815984979975/unknown.png'}
                                          alt={'logo'}/>
                                   <div className="card-body">
                                       <div className="d-flex justify-content-between">
                                           <Link to={route(Routes.ProjectsDetail, {id: project._id})}>
                                               <h5 className="card-title text-dark">  {project.name}</h5>
                                           </Link>
                                           <SaveItem  project={project} />
                                       </div>
                                       <p className="card-text"><small className="text-muted">Last updated <br></br> {project.updatedAt}</small></p>
                                   </div>
                               </div>
                           </div>
                       )
                   )
               }
           </div>
       </>
    )
};



export default ProjectsOverview;