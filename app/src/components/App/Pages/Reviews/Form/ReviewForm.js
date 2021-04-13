import {useCallback, useEffect, useState} from "react";
import Input from "../../../../Design/Input";
import * as yup from 'yup';
import { getValidationErrors } from "../../../../../core/utils/validation";
import Button from "../../../../Design/Button";
import ClientSelect from "../../Projects/Select/ClientSelect";
import ReviewSelect from "../Select/ReviewSelect";

const schema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    score: yup.number().required(),
    description: yup.string().required(),
});

const defaultData = {
    firstName: '',
    lastName: '',
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
        // thanks for the help with this @KobeDev ^‿^
        if(e.target.localName === 'select') {
            const text = e.target.[e.target.options.selectedIndex].innerHTML;
            const res = text.split(" ");
            const name = res.splice(0, Math.ceil(res.length / 2));
            setData({
                ...data,
                project: {
                    _id: e.target.value,
                    name: name[0],
                },
                projectId: e.target.value,
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
            console.log(data)
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
            <label htmlFor="firstName">firstName</label>
            <Input type="text" name="firstName"
                value={data.firstName}
                disabled={disabled}
                onChange={handleChange}
                error={errors.firstName}
            />
            <label htmlFor="firstName">firstName</label>
            <Input type="text" name="firstName"
                   value={data.firstName}
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.firstName}
            />

            <ReviewSelect
                name="projectId"
                label="Project"
                value={data.projectId}
                disabled={disabled}
                onChange={handleChange}
                error={errors.projectId}
            />

            <label htmlFor="firstName">firstName</label>
            <Input type="text" name="firstName"
                   value={data.firstName}
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.firstName}
            />

            <Button type="submit" disabled={disabled}>
                {data._id ? 'Update' : 'Create'}
            </Button>
        </form>
    )
}

export  default ReviewForm;