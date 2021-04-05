import {useState} from "react";
import Container from "../../../Design/Container";
import Styles from './LoginPage.module.scss'
import Input from "../../../Design/Input";
import Button from "../../../Design/Button";
import * as yup from 'yup';

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const LoginPage = ({setUser}) => {
    const [errors, setErrors] = useState({});
    const [error, setError] = useState();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        schema.validate(data).then(()=> {
            fetch(`${process.env.REACT_APP_BASE_API}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setUser(data)
                })
                .catch((e) => {
                    // TODO catch error cleaner
                    console.log(e);
                })
        }).catch((e) => {
            console.log(e.errors)
        })
    };
    return (
        <Container>
            <div className="text-center" >
                {/*{ error && <Alert color="danger"> { error.message || 'something went wrong' } </Alert>}*/}
                <form className={Styles['form-signin']} onSubmit={handleSubmit}>
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <Input type="email" name="email" value={data.email} onChange={handleChange}  />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <Input type="password" name="password" value={data.password} onChange={handleChange} />
                    <Container>
                        <Button color="primary" type="submit">Sign in</Button>
                    </Container>
                </form>
            </div>
        </Container>
    )
};

export default LoginPage;
