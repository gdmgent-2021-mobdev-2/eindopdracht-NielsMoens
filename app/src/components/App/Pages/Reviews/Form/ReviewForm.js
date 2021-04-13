import {useCallback, useEffect, useState} from "react";
import Input from "../../../../Design/Input";
import * as yup from 'yup';
import { getValidationErrors } from "../../../../../core/utils/validation";
import Button from "../../../../Design/Button";

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    project: yup.string().required(),
    score: yup.number().required(),
    description: yup.string().required(),
});

const defaultData = {
    firstName: '',
    lastName: '',
    project: '',
    score: '',
    description: '',
};

const ReviewForm = ({onSubmit, initialData ={}, disabled}) => {
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
            <label htmlFor="firstName">firstName</label>
            <Input type="text" name="firstName"
                value={data.firstName}
                disabled={disabled}
                onChange={handleChange}
                error={errors.firstName}
            />

            <label htmlFor="lastName">project</label>
            <Input type="text" name="lastName"
                value={data.lastName}
                disabled={disabled}
                onChange={handleChange}
                error={errors.lastName}
            />

            <label htmlFor="firstName">First Name</label>
            <Input type="text" name="firstName"
                value={data.firstName}
                disabled={disabled}
                onChange={handleChange}
                error={errors.firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <Input type="text" name="lastName"
                value={data.lastName}
                disabled={disabled}
                onChange={handleChange}
                error={errors.lastName}
            />

            <Button type="submit" disabled={disabled}>
                {data._id ? 'Update' : 'Create'}
            </Button>
        </form>
    )
}

export  default ReviewForm;