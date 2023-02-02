import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import { filterQueryMovies, filterShortMovies } from '../../utils/utils';

function SavedMovies(props) {

    const [filteredMovies, setFilteredMovies] = useState([]) // отфильтрованные фильмы
    const [queryMovies, setQueryMovies] = useState([]) // список фильмов по запросу
    const [shortMovies, setShortMovies] = useState(false); // состояние чекбокса
    const [query, setQuery] = useState('') // запрос


    useEffect(() => {

        setFilteredMovies(props.savedMovies)

    }, [props.savedMovies])


    function setFilteredMoviesHandler(movies, query) {

        const moviesList = filterQueryMovies(movies, query); //фильтруем полученный массив по запросу
        setQueryMovies(moviesList) // добавляем в список запрошенных фильмов

        if (moviesList.length === 0) {
            props.setInfoPopup({
                isActive: true,
                successful: false,
                info: 'Извините, мы ничего не нашли. Попробуйте ещё.'
            })
        }

        if (shortMovies) {
            setFilteredMovies(filterShortMovies(moviesList))
        } else {
            setFilteredMovies(moviesList)

        }
    }

    function onQueryMovies(query) {
        props.setPreloader(true)

        setTimeout(() => {
            setFilteredMoviesHandler(props.savedMovies, query);
            props.setPreloader(false)
        }, 500)
    }

    function handleShortMovies() {
        props.setPreloader(true)
        setTimeout(() => {
            if (!shortMovies) {

                const filteredShortList = filterShortMovies(filteredMovies)
                setFilteredMovies(filteredShortList);

                if (filteredShortList.length === 0) {
                    props.setInfoPopup({
                        isActive: true,
                        successful: false,
                        info: 'Извините, мы ничего не нашли. Попробуйте ещё.'
                    })
                }
                
            } else {
                setFilteredMovies(queryMovies.length !== 0 ? queryMovies : props.savedMovies)
            }
            setShortMovies(!shortMovies)
            props.setPreloader(false)
        }, 300)
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
                    movies={filteredMovies}

                    saveMovie={props.saveMovie}
                    deleteMovie={props.deleteMovie}

                    savedMovies={props.savedMoviess}
                />
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies