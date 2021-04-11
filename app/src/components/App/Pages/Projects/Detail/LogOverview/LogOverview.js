import {useCallback} from "react";
import {fetchLogsByProject} from "../../../../../../core/modules/logs/api";
import useFetch from "../../../../../../core/hooks/useFetch";
import {Link} from "react-router-dom";
import {route, Routes} from "../../../../../../core/routing/routing";
import Spinner from "../../../../../Design/LoadingSpinner";
import Alert from "../../../../../Design/Alert";


const LogOverview = ({projectId}) =>{
    const apiCall = useCallback(()=>{
        return fetchLogsByProject(projectId)
    },[projectId])

    const {
        data: logs,
        error,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }
    return (
        <>
            <ul className="row list-unstyled">
                {logs.map((log) => (
                    <li className="col-sm-4 my-2" key={log._id}>
                        <Link
                            to={route(Routes.ProjectsDetailAddLog, {
                                id: log._id,
                            })}>
                        </Link>
                        <div>
                            <h2 className="h4">{log.title}</h2>
                            <p className="text-black-50">{log.description}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </>

    )
}

export default LogOverview;