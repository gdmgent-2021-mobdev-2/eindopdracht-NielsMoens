import {useCallback, useEffect, useState} from "react";
import Input from "../../../../Design/Input";
import * as yup from 'yup';
import { getValidationErrors } from "../../../../../core/utils/validation";
import Button from "../../../../Design/Button";
import ClientSelect from "../Select/ClientSelect";

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
});

const defaultData = {
    name: '',
    description: '',
};

const ProjectForm = ({onSubmit, initialData ={}, disabled}) => {
    const [isTouched, setIsTouched] = useState(false)
    const[data, setData] = useState({
        ...defaultData,
        ...initialData,
    });

    const[errors, setErrors] = useState({});
    const handleChange = (e) => {
        // thanks for the help with this @KobeDev ^‿^
        if(e.target.localName === 'select') {
            const text = e.target.[e.target.options.selectedIndex].innerHTML;
            const res = text.split(" ");
            const firstName = res.splice(0, Math.ceil(res.length / 2));
            const lastName = res.splice((Math.ceil(res.length / 2)) - 1, res.length);
            setData({
                ...data,
                client: {
                    _id: e.target.value,
                    firstName: firstName[0],
                    lastName: lastName[0]
                },
                clientId: e.target.value,
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })

        }
    }

    const validate = useCallback((data, onSucces) => {
        schema.validate(data, {abortEarly: false})
            .then(() => {
                if (onSucces){
                    onSucces();
                }
            }).catch((err) => {
            setErrors(getValidationErrors(err))
        });
    },);

    // so the error alert messages go away when the user starts typing in the form
    useEffect(()=> {
        if(isTouched) {
            validate(data);
        }
    }, [ data]);



    const handleSubmit = (e) => {
        // otherwise the browser will reload the webpage
        e.preventDefault();
        setIsTouched(true)
        validate(data, () => {
            onSubmit(data)
        })
    };

    return (
        <form onSubmit={handleSubmit} noValidate={true}>
            <label htmlFor="name"> Name</label>
            <Input type="text" name="name"
                value={data.name}
                disabled={disabled}
                onChange={handleChange}
                error={errors.name}
            />

            <label htmlFor="description">Description</label>
            <Input type="text" name="description"
                value={data.description}
                disabled={disabled}
                onChange={handleChange}
                error={errors.description}
            />

            <ClientSelect
                name="clientId"
                label="Client"
                value={data.clientId}
                disabled={disabled}
                onChange={handleChange}
                error={errors.clientId}
            />

            <Button type="submit" disabled={disabled}>
                {data._id ? 'Update' : 'Create'}
            </Button>
        </form>
    )
}

export  default ProjectForm;