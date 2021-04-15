import {useCallback, useEffect, useState} from "react";
import Input from "../../../../../../Design/Input";
import * as yup from 'yup';
import { getValidationErrors } from "../../../../../../../core/utils/validation";
import Button from "../../../../../../Design/Button";
import AdminContainer from "../../../../../../Shared/Admin/AdminContainer";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    role: yup.string().required(),
});

const defaultData = {
    email: '',
    name: '',
    role: '',
};

const UserUpdateForm = ({onSubmit, initialData ={}, disabled}) => {
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
            <label htmlFor="email">email</label>
            <Input type="email" name="email"
                value={data.email}
                disabled={disabled}
                onChange={handleChange}
                error={errors.email}
            />
            <label htmlFor="name">name</label>
            <Input type="text" name="name"
                value={data.name}
                disabled={disabled}
                onChange={handleChange}
                error={errors.name}
            />
            <AdminContainer>
                <label htmlFor="email">role</label>
                <Input type="role" name="role"
                       value={data.role}
                       disabled={disabled}
                       onChange={handleChange}
                       error={errors.role}
                />
            </AdminContainer>


            <Button type="submit" disabled={disabled}>
                {data._id ? 'Update' : 'Create'}
            </Button>
        </form>
    )
}

export  default UserUpdateForm;