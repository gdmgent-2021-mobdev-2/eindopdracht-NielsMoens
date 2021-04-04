import { useState, useEffect, useCallback } from 'react';


const UseFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = useCallback(()=>{
        console.log()
    })

        useEffect(() => {
            setData(null);
            setError(null);

                let isCurrent = true;
                fetch(url)
                    .then((json) => {
                        if (json.status === 404) {
                            throw new Error('not found');
                        }
                        return json;
                    })
                    .then((json) => json.json())
                    .then((data) => isCurrent && setData(data))
                    .catch((error) => isCurrent && setError(String(error)));

                return () => {
                    isCurrent = false
                };

        }, [url]);

        const refresh = () => {
            fetchData(url, setData, setError);
        };
        const isLoading = !data && !error;

        return {
            data,
            error,
            refresh,
            isLoading,
        }
    };

export default UseFetch;