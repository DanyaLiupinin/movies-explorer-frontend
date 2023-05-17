import { checkRequest } from "./checkRequest";

const apiLink = 'https://movies-explorer-backend.onrender.com'


export const authorization = (email, password) => {
    return fetch(`${apiLink}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => {
            return checkRequest(res)
        })
}

export const registration = (name, email, password) => {
    return fetch(`${apiLink}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    })
        .then((res) => {
            return checkRequest(res)
        })
}

export const saveMovie = (data) => {
    return fetch(`${apiLink}/movies`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co${data.image.url}`,
            trailerLink: data.trailerLink,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
            movieId: data.id
        }),
    })
        .then((res) => {
            return checkRequest(res)
        })
}

export const deleteMovie = (data) => {
    return fetch(`${apiLink}/movies/${data}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    })
        .then((res) => {
            return checkRequest(res)
        })
}

export const getSavedMovies = () => {
    return fetch(`${apiLink}/movies`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    })
        .then((res) => {
            return checkRequest(res)
        })
}

export const getUserInfo = () => {
    return fetch(`${apiLink}/users/me`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    })
        .then((res) => {
            return checkRequest(res)
        })
}

export const updateUserInfo = (name, email) => {
    return fetch(`${apiLink}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
        .then((res) => {
            return checkRequest(res)
        })
}
