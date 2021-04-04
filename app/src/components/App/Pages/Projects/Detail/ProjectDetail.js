import {useParams} from "react-router";

const ProjectDetail = () => {
    const { id } = useParams();
    return (
        <h1>detail page Project WOEHOOE {id} </h1>
    )
};

export default ProjectDetail;