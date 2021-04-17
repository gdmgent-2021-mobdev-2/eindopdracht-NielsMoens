import { createHeaders } from "../../utils/api";

const fetchStarredItems = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/starredItems`, {
        headers: createHeaders(headers),
    });
}

const createStarredItems = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/starredItems`, {
        method:'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
}

const deleteStarredItemsByProjectId = async (projectId, user) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/starredItems/${projectId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
    }).then((response) => response.json())
}

export {
    fetchStarredItems,
    createStarredItems,
    deleteStarredItemsByProjectId
}