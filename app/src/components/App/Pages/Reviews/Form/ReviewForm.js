import {useCallback, useEffect, useState} from "react";
import Input from "../../../../Design/Input";
import * as yup from 'yup';
import { getValidationErrors } from "../../../../../core/utils/validation";
import Button from "../../../../Design/Button";
import ReviewSelect from "../Select/ReviewSelect";
import {useAuth} from "../../../../Auth/AuthProvider";
import {fetchProjects} from "../../../../../core/modules/projects/api";

const schema = yup.object().shape({
    name: yup.string().required(),
    score: yup.number().required(),
    title: yup.string().required(),
    description: yup.string().required(),
});

const defaultData = {
    name: '',
    score: '',
    title : '',
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
            <label htmlFor="name">name</label>
            <Input type="text" name="name"
                value={data.name}
                disabled={disabled}
                onChange={handleChange}
                error={errors.name}
            />
            <label htmlFor="score">score</label>
            <Input type="number"
                   name="score"
                   placeholder="give a score between 0-5"
                   value={data.score}
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.score}
                   min={0}
                   max={5}
            />

            <ReviewSelect
                name="projectId"
                label="Project"
                value={data.projectId}
                disabled={disabled}
                onChange={handleChange}
                error={errors.projectId}
            />

            <label htmlFor="title">title</label>
            <Input type="text" name="title"
                   value={data.title}
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.title}
            />

            <label htmlFor="description">description</label>
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
    )
}

export default ReviewForm;