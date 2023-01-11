import './SearchForm.css'
import '../Movies/Movies.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ movieRequest, setMovieRequest }) {


    const handleMovuesRequestChange = (e) => {
        setMovieRequest(e.target);
    }


    return (
        <div className="searchForm">
            <div className="searchForm__form-container">
                <form className="searchForm__form">
                    <input
                        className="searchForm__input"
                        placeholder='Фильм'
                        name="movie__request"
                        onChange={handleMovuesRequestChange}
                        value={movieRequest}
                    />
                    <button
                        className="searchForm__button"
                        type="submit">Найти</button>
                    <FilterCheckbox />
                </form>
            </div>
        </div>
    )
}

export default SearchForm