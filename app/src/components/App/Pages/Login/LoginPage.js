import {useState} from "react";
import * as yup from 'yup';
import {login} from "../../../../core/modules/auth/api";
import {getValidationErrors} from "../../../../core/utils/validation";
import {handleApiResult} from "../../../../core/utils/api";
import ApiError from '../../../../core/error/apiError'
import AppError from "../../../../core/error/appError";
import Styles from './LoginPage.module.scss'
import Input from "../../../Design/Input";

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const LoginPage = ({setUser}) => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [error, setError] = useState();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        schema.validate(data, {abortEarly: false}).then(()=> {
            login(data)
                .then(handleApiResult)
                .then((data) => {
                    setUser(data)
                })
                .catch((e) => {
                    if(e instanceof ApiError) {
                        if (e.isUnauthorized()) {
                            setError(new AppError('Wrong combination'))
                        } else {
                            setError(e)
                        }
                    } else {
                        setError(new AppError(e));
                    }
                })
        }).catch((err) => {
            setErrors(getValidationErrors(err));
        })
    };

    return (
        <body id='body' className="d-flex flex-column">
            <main className="m-auto">
                <div className="container-fluid">
                    <div className="card login-card">
                        <div className="card-body">
                            <h2 className="login-card-title">Sign in</h2>
                            <form className={Styles['form-signin']} onSubmit={handleSubmit} noValidate={true}>
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only text-white">Email address</label>
                                    <Input placeholder="Email" id="username" className="form-control" type="email" name="email" value={data.email} onChange={handleChange} error={errors.email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="sr-only text-white">Password</label>
                                    <Input id="password"  className="form-control" placeholder="Password" type="password" name="password" value={data.password} onChange={handleChange} error={errors.password} />
                                </div>

                                <input name="login" id="login" className="btn login-btn" type="submit" value="Login" />

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
};

export default LoginPage;
