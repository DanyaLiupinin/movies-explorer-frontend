const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies'

export const getAllMovies = () => {
    return fetch(moviesUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => checkRes(res));
}


const checkRes = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

