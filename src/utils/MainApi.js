import { checkRequest } from "./checkRequest";

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhZjEzN2YwMzU0ZDk5NDEyZjlhYWEiLCJpYXQiOjE2NzQ5OTMzOTQsImV4cCI6MTY3NTU5ODE5NH0.81jqyiSLIt7I5aAxq7J7vigQqmniVgbi1QeHfOz8SjQ'

const apiLink = 'https://api.cinema-explorer.nomoredomains.club'
    

export const saveMovie = (data) => {
    return fetch(`${apiLink}/movies`, {
        method: 'POST',
        headers: {
            //authorization: `Bearer ${localStorage.getItem('jwt')}`,
            authorization: token,
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
        authorization: token
        //authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
    .then(res => checkRequest(res));
  }
