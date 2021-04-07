import ApiError from '../error/apiError'

const handleApiResult = async (res) => {
    if (!res.ok) {
        const json = await res.json();
        throw new ApiError(json);
    }
    return res.json();
};

// const createHeaders = (extra = {}) => {
//     return{
//         'Content-Type' : 'application/json',
//         ...extra,
//     }
// };
// TODO DELETE LATER dit is tzelfde als onderstaande gewoon langer en duidelijker

const createHeaders = (extra = {}) => ({
    'Content-Type': 'application/json',
    ...extra,
});

const createAuthHeader = (token) => ({
    Authorization: `Bearer ${token}`,
});

const withToken = (promise, token) => {
    return promise(createAuthHeader(token));
};

export { handleApiResult, createHeaders, withToken}