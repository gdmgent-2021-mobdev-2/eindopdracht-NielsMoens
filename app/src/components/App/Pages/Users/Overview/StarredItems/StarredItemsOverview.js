import useFetch from "../../../../../../core/hooks/useFetch";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../../core/routing/routing";
import {fetchStarredItems} from "../../../../../../core/modules/StarredProject/api";

const StarredItemsOverview = ({ user }) => {
    const {
        data: projects,
    } = useFetch(fetchStarredItems);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className=" col-lg-12">
                        <h3>⭐Projects </h3>
                        <h6 className="text-muted">Here you'll find all the saved projects</h6>
                        <ul className="list-group">
                            {
                                 projects && projects.map(
                                     (project) => (
                                         <Link to={route(Routes.ProjectsDetail, {id: project.project._id})}>
                                             <li className="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center">

                                                     <h5 className="card-title text-dark link">  {project.project.name}</h5>

                                                 <div className="image-parent">
                                                     <img
                                                         src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg"
                                                         className="img-fluid" alt="quixote" />
                                                 </div>
                                             </li>
                                         </Link>
                                    )
                                 )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default StarredItemsOverview;