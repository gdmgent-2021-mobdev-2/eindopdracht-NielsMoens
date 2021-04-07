const {createHeaders} = require("../../utils/api");

const fetchClients = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/clients`, {
        headers: createHeaders(headers),
    });
};