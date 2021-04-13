import {useCallback} from "react";
import {fetchLogsByProject} from "../../../../../../../core/modules/logs/api";
import useFetch from "../../../../../../../core/hooks/useFetch";
import Spinner from "../../../../../../Design/LoadingSpinner";
import Alert from "../../../../../../Design/Alert";


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
            <div className="container">
                <h3 className="my-4">Updates</h3>
                <div className="row">
                    {
                        logs.map((log) => (
                            <div key={log._id} className="col-md-3 col-sm-6 mb-4">
                                <h5>
                                    {log.title}
                                </h5>
                                <p>
                                    {log.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LogOverview;