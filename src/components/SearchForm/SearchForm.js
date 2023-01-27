import React, { useState } from 'react';
import './SearchForm.css'
import '../Movies/Movies.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onQueryMovies, shortMovies, handleShortMovies }) {

    const [query, setQuery] = useState('');
    const [queryError, setQueryError] = useState(false)

    const handleMoviesRequestChange = (e) => {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        
        e.preventDefault();

        if (query.trim().length !== 0) {
            setQueryError(false)
            onQueryMovies(query)
        } else {
            setQueryError(true)
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
                    <span className={`searchForm__error ${queryError ? 'searchForm__error_active' : ''}`}>Нужно ввести ключевое слово</span>
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