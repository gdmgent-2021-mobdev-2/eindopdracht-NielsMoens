import useFetch from "../../../../../../core/hooks/useFetch";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../../core/routing/routing";
import {fetchStarredItems} from "../../../../../../core/modules/StarredProject/api";

const StarredItemsOverview = ({ user }) => {
    const {
        data: projects,
    } = useFetch(fetchStarredItems);

    if (projects && projects.length ){
        return (
            <>
                <h1>⭐Projects </h1>
                <h6 className="text-muted">Here you'll find all the saved projects</h6>
                <ul className="list-group">
                    {
                        projects && projects.map(
                            (project) => (
                                <Link key={project.project._id} to={route(Routes.ProjectsDetail, {id: project.project._id})}>
                                    <li className="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center flex-row ">
                                        <h5 className="card-title text-dark link">  {project.project.name}</h5>

                                            {project.project.img !== undefined ? <img src={project.project.img} className="w-25" alt="quixote" /> : ''}
                                    </li>
                                </Link>
                            )
                        )
                    }
                </ul>
            </>
        )
    } else {
       return (
                <>
                    <h1>⭐Projects </h1>
                    <h6 className="text-muted">No saved projects</h6>
                    <p></p>
                </>
       )
    }

};

export default StarredItemsOverview;