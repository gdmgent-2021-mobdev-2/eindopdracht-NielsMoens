import { useState, useEffect, useCallback } from 'react';
import {useAuth} from "../../components/Auth/AuthProvider";
import {handleApiResult} from "../utils/api";
import useAuthApi from "./useAuthApi";

const useFetch = (url) => {
    const withAuth = useAuthApi();
    // to access the data of the current logged in user
    const {user} = useAuth();

    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = useCallback((isCurrent = true) => {
        withAuth(fetch(`${process.env.REACT_APP_BASE_API}${url}`,{
                headers: {
                    authorization: `bearer ${user.token}`,
                }
            }))
            .then((data) => isCurrent && setData(data))
            .catch((error) => isCurrent && setError(String(error)));
    }, [url, withAuth]);

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