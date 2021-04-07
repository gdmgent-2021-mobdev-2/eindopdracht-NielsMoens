import {useState} from "react";
import Input from "../../../../Design/Input";
import getValidateError from "../../../../../core/utils/validation";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    company: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
});

const defaultData = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
};

const ClientForm = ({onSubmit, initialData ={}, disabled}) => {
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

    const handleSubmit = (e) => {
        // otherwise the browser will reload the webpage
        e.preventDefault();
        schema.validate(data, {abortEarly: false})
        .then(() => {
            onSubmit(data)
        }).catch((err) => {
            setErrors(getValidateError(err))
        });

    };

    return (
        <form onSubmit={handleSubmit} noValidate={true}>
            <label htmlFor="company">Company</label>
            <Input type="text" name="company"
                value={values.company}
                disabled={disabled}
                onChange={handleChange}
                error={errors.company}
            />

            <label htmlFor="email">Email address</label>
            <Input type="email" name="email"
                value={values.email}
                disabled={disabled}
                onChange={handleChange}
                error={errors.email}
            />

            <label htmlFor="firstName">First Name</label>
            <Input type="text" name="firstName"
                value={values.firstName}
                disabled={disabled}
                onChange={handleChange}
                error={errors.firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <Input type="text" name="lastName"
                value={values.lastName}
                disabled={disabled}
                onChange={handleChange}
                error={errors.lastName}
            />

            <Button type="submit" disabled={disabled}>
                {values._id ? 'Update' : 'Create'}
            </Button>
        </form>
    )
}

export  default ClientForm;