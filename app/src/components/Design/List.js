import Image from "./Image";
import {Link} from "react-router-dom";
import {route, Routes} from "../../core/routing/routing";
import SaveItem from "../App/Pages/Starred/SaveItem";

const List = ({projects, onStudentClick}) => {
    return (
        <>
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
        </>

    );
};
export default List;