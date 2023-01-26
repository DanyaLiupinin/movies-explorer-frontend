import React, { useState } from 'react';
import './SearchForm.css'
import '../Movies/Movies.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onQueryMovies }) {
    
    const [query, setQuery] = useState('');

    const handleMoviesRequestChange = (e) => {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

       
            onQueryMovies(query);

    }

    return (
        <div className="searchForm">
            <div className="searchForm__form-container">
                <form className="searchForm__form" onSubmit={handleSubmit}>
                    <input
                        required
                        className="searchForm__input"
                        placeholder='Фильм'
                        name="movie__request"
                        onChange={handleMoviesRequestChange}
                        value={query}
                    />
                    <button
                        className="searchForm__button"
                        type="submit">Найти
                    </button>
                    <FilterCheckbox />
                </form>
            </div>
        </div>
    )
}

export default SearchForm