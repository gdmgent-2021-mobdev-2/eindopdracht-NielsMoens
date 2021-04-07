import {useState} from "react";
import Input from "../../../../Design/Input";

const ClientForm = ({disabled}) => {
    const[data, setData] = useState({});
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