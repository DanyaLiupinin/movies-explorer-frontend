const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies'

export function getAllMovies() {
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
    return Promise.reject(`Error: ${res.status}`);
};

