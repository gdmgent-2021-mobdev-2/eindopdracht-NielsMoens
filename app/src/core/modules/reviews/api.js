const {createHeaders} = require("../../utils/api");

const fetchReviews = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/reviews`, {
        headers: createHeaders(headers),
    });
};

const createReview = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/reviews`, {
        method: 'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

const updateReview = (data) => (headers) => {
    const { _id } = data;
    return fetch(`${process.env.REACT_APP_BASE_API}/reviews/${_id}`, {
        method: 'PATCH',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

export { fetchReviews, createReview, updateReview}