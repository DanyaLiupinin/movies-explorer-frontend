import { checkRequest } from "./checkRequest";

const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies'

export const getAllMovies = () => {
    return fetch(moviesUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => checkRequest(res));
}


