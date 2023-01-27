import React, { useEffect, useState } from 'react';
import './SearchForm.css'
import '../Movies/Movies.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onQueryMovies, shortMovies, handleShortMovies, queryError, query, setQuery }) {

    const [noMovies, setNoMovies] = useState(false)

    useEffect(() => {
        setQuery(query)
    }, [query, setQuery])

    const handleMoviesRequestChange = (e) => {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        
        e.preventDefault();

        if (query.trim().length !== 0) {
            setNoMovies(false)
            onQueryMovies(query)
        } else {
            setNoMovies(true)
        }

    }

    return (
        <div className="searchForm">
            <div className="searchForm__form-container">
                <form className="searchForm__form" noValidate onSubmit={handleSubmit}>
                    <input
                        required
                        className="searchForm__input"
                        placeholder='Фильм'
                        name="movie__request"
                        onChange={handleMoviesRequestChange}
                        value={query}
                    />
                    <span className={`searchForm__error ${noMovies || queryError ? 'searchForm__error_active' : ''}`}>
                        {noMovies ? 'Нужно ввести ключевое слово' : 
                        '«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».' }
                        </span>
                    <button
                        className="searchForm__button"
                        type="submit">Найти
                    </button>
                    <FilterCheckbox
                    shortMovies={shortMovies}
                    handleShortMovies={handleShortMovies}
                    />
                </form>
            </div>
        </div>
    )
}

export default SearchForm