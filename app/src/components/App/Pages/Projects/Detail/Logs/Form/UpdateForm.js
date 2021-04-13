import {useCallback, useEffect, useState} from "react";
import Input from "../../../../../../Design/Input";
import * as yup from 'yup';
import { getValidationErrors } from "../../../../../../../core/utils/validation"
import Button from "../../../../../../Design/Button";

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
});

const defaultData = {
    title: '',
    description: '',
};

const UpdateForm = ({onSubmit, initialData = {}, disabled}) => {
    const [isTouched, setIsTouched] = useState(false)
    const[data, setData] = useState({
        ...defaultData,
        ...initialData,
    });
    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData ({
            ...data,
            [e.target.name] : e.target.value
        })
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
    },[data]);

    // so the error alert messages go away when the user starts typing in the form
    useEffect(()=> {
        if(isTouched) {
            validate(data);
        }
    }, [data]);


    const handleSubmit = (e) => {
        // otherwise the browser will reload the webpage
        e.preventDefault();
        setIsTouched(true)
        validate(data, () => {
            onSubmit(data)
        })
    };

    return (
        <>
            <form onSubmit={handleSubmit} noValidate={true}>
                <label htmlFor="title">Title</label>
                <Input type="text" name="title"
                       value={data.title}
                       disabled={disabled}
                       onChange={handleChange}
                       error={errors.title}
                />

                <label htmlFor="description">Description</label>
                <Input type="text" name="description"
                       value={data.description}
                       disabled={disabled}
                       onChange={handleChange}
                       error={errors.description}
                />

                <Button type="submit" disabled={disabled}>
                    {data._id ? 'Update' : 'Create'}
                </Button>
            </form>
        </>
    )
}

export default UpdateForm ;