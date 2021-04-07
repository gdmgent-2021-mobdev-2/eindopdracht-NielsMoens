import { useState, useEffect, useCallback } from 'react';
import {useAuth} from "../../components/Auth/AuthProvider";
import ApiError from '../error/ApiError'
import {handleApiResult} from "../modules/utils/api";

const useFetch = (url) => {
    // to access the data of the current logged in user
    const {user} = useAuth();

    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = useCallback((isCurrent = true) => {
        fetch(`${process.env.REACT_APP_BASE_API}${url}`,{
            headers: {
                authorization: `bearer ${user.token}`,
            }
        })
            .then(handleApiResult)
            .then((data) => isCurrent && setData(data))
            .catch((error) => isCurrent && setError(String(error)));
    }, [url]);

    const refresh = () => {
        fetchData();
    };

    useEffect(() => {
        setData(null);
        setError(null);
        if (url) {
            let isCurrent = true;

            fetchData(isCurrent);

            return () => {
                isCurrent = false
            };
        }
    }, [url, fetchData]);

    const isLoading = !data && !error;

    return {
        data,
        error,
        refresh,
        isLoading,
    }
};

export default useFetch;