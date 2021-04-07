import ApiError from '../error/apiError'

const handleApiResult = async (res) => {
    if (!res.ok) {
        const json = await res.json();
        throw new ApiError(json);
    }
    return res.json();
};

const createHeaders = (extra = {}) => {
    return{
        'Content-Type' : 'application/json',
        ...extra,
    }
};

export { handleApiResult, createHeaders}