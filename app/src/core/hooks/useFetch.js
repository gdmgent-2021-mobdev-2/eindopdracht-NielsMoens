import { useState, useEffect, useCallback } from 'react';
import {useAuth} from "../../components/Auth/AuthProvider";
import {handleApiResult} from "../utils/api";
import useAuthApi from "./useAuthApi";

const useFetch = (apiCall) => {
    const withAuth = useAuthApi();
    // to access the data of the current logged in user
    const {user} = useAuth();

    const [data, setData] = useState();
    const [error, setError] = useState();


    const fetchData = useCallback((isCurrent = true) => {
        withAuth(apiCall())
            .then((data) => isCurrent && setData(data))
            .catch((error) => isCurrent && setError(String(error)));
    }, [apiCall, withAuth]);

    const refresh = () => {
        fetchData();
    };

    useEffect(() => {
        setData(null);
        setError(null);
        if (apiCall) {
            let isCurrent = true;

            fetchData(isCurrent);

            return () => {
                isCurrent = false
            };
        }
    }, [apiCall, fetchData]);

    const isLoading = !data && !error;
    // console.log("data", data);
    return {
        data,
        error,
        setData,
        refresh,
        isLoading,
    }
};

export default useFetch;