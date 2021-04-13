import { useState, useEffect } from 'react';
import Select from '../../../../Design/Select';
import useAuthApi from '../../../../../core/hooks/useAuthApi';
import {fetchProjects} from "../../../../../core/modules/projects/api";

const ProjectSelect = (props) => {
    const withAuth = useAuthApi();

    const [project, setProject] = useState();

    useEffect(() => {
        withAuth(fetchProjects())
            .then((data) => setProject(data))
            .catch((error) => {
            });
    }, [withAuth]);

    const options = project
        ? project.map((c) => ({ value: c._id, label: c.name }))
        : null;

    return <Select options={options} {...props} />;
};

export default ProjectSelect;
