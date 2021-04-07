import { useCallback} from 'react';
import {useAuth} from "../../components/Auth/AuthProvider";
import {handleApiResult, withToken} from "../utils/api";
import ApiError from "../error/apiError";
import AppError from "../error/appError";

const useAuthApi = () => {
    const {user , logout} = useAuth();

    const withAuth = useCallback((promise) => {
            return new Promise((resolve, reject) => {
                withToken(promise, user.token)
                    .then(handleApiResult)
                    .then((data) => resolve(data))
                    .catch((error) => {
                        if (error instanceof ApiError) {
                            if(error.isUnauthorized()) {
                                logout();
                            } else {
                                reject(error);
                            }
                        } else {
                            reject(new AppError());
                        }
                    })
            });
        }, [logout, user.token]);

    return withAuth;
}

export  default  useAuthApi;