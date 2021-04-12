import {useParams} from "react-router";
import useFetch from "../../../../../core/hooks/useFetch";
import {fetchProject} from "../../../../../core/modules/projects/api";
import {useCallback} from "react";
import LogOverview from "./LogOverview/LogOverview";
import Button from "../../../../Design/Button";
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import Spinner from "../../../../Design/LoadingSpinner";
import Alert from "../../../../Design/Alert";

const ProjectDetail = () => {
    const { id }= useParams();

    const apiCall = useCallback(()=>{
        return fetchProject(id)
    },[id])

    const {
        data: project,
        error,
        setData,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) {
        return <Spinner/>
    }

    if (error) {
        return <Alert color='danger'>{error}</Alert>
    }
    return (
        <>

            {project && <h1>Product detail page of '{project.name}'   </h1> }
            {<h2>Project </h2>}
            <AdminContainer>
                <Button // onClick={handleCreaLog}te
                >
                    Create Log
                </Button>
            </AdminContainer>

            <LogOverview projectId={id} />
        </>
    )
};

export default ProjectDetail;