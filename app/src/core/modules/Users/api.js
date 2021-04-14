const {createHeaders} = require("../../utils/api");

const fetchUsers = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/users`, {
        headers: createHeaders(headers),
    });
};

const fetchUser = (id) => (headers) => {
    console.log(id)
    return fetch(`${process.env.REACT_APP_BASE_API}/users/${id}`, {
        headers: createHeaders(headers),
    });
};

const createUsers = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/users`, {
        method: 'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

const updateUser = (data) => (headers) => {
    const { _id } = data;
    return fetch(`${process.env.REACT_APP_BASE_API}/users/${_id}`, {
        method: 'PATCH',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

const deleteUser = (_id) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/users/${_id}`, {
        method: 'DELETE',
        headers: createHeaders(headers),
    });
};
export { fetchUsers, fetchUser, createUsers, createHeaders, updateUser, deleteUser}