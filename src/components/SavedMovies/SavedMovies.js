import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { filterQueryMovies, filterShortMovies } from '../../utils/utils';

function SavedMovies(props) {

    const [filteredMovies, setFilteredMovies] = useState([]) // отфильтрованные фильмы
    const [queryMovies, setQueryMovies] = useState([]) // список фильмов по запросу
    const [shortMovies, setShortMovies] = useState(false); // состояние чекбокса
    const [query, setQuery] = useState('') // запрос

    function setFilteredMoviesHandler(movies, query) {

        const moviesList = filterQueryMovies(movies, query); //фильтруем полученный массив по запросу
        setQueryMovies(moviesList) // добавляем в список запрошенных фильмов

        if (shortMovies) {
            setFilteredMovies(filterShortMovies(moviesList))
        } else {
            setFilteredMovies(moviesList)

        }

        /*

        localStorage.setItem('visibleMovies', JSON.stringify(moviesList))
        localStorage.setItem('query', query)
*/
    }

    function onQueryMovies(query) {
        setFilteredMoviesHandler(props.allMovies, query);
    }

    function handleShortMovies() {
        //localStorage.setItem('checkbox', !shortMovies)
        setShortMovies(!shortMovies)

        if (!shortMovies) {
            setFilteredMovies(filterShortMovies(filteredMovies));
        } else {
            setFilteredMovies(queryMovies)
        }
    }

    return (

        <>

            <Header
                loggedIn={props.loggedIn}
                setLoggedIn={props.setLoggedIn}
                handleOnClickBurger={props.handleOnClickBurger}
                isBurgerOpened={props.isBurgerOpened}
            />

            <main className='savedMovies'>

                <SearchForm
                    onQueryMovies={onQueryMovies}
                    shortMovies={shortMovies}
                    handleShortMovies={handleShortMovies}

                    queryError={props.queryError}
                    query={query}
                    setQuery={setQuery}

                />

                <MoviesCardList
                    allMovies={props.allMovies}
                    movies={filteredMovies}

                />

            </main>

            <Footer />

        </>

    )
}

export default SavedMovies