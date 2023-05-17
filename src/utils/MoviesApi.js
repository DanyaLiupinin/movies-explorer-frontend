import { checkRequest } from "./checkRequest";

const moviesUrl = 'https://movies-explorer-backend.onrender.com'

export const getAllMovies = () => {
    return fetch(moviesUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => checkRequest(res));
}


