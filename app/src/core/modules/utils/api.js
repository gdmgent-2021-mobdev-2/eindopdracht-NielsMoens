import ApiError from '../../error/ApiError'

const handleApiResult = async (res) => {
    if (!res.ok) {
        const json = await res.json();
        throw new ApiError(json);
    }
    return res.json();
};

export { handleApiResult}