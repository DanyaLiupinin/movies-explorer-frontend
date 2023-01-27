import React, { useEffect, useState } from 'react';
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { filterQueryMovies, filterShortMovies } from '../../utils/utils';

function Movies(props) {


    const [queryMovies, setQueryMovies] = useState([]) // список фильмов по запросу
    const [filteredMovies, setFilteredMovies] = useState([]) // конечный видимый массив
    const [shortMovies, setShortMovies] = useState(false); // состояние чекбокса
    const [query, setQuery] = useState('')

    // возвращаем состояния при возвращении на страницу

    useEffect(() => {

        const movies = JSON.parse(localStorage.getItem('visibleMovies'));
        const query = localStorage.getItem('query')

        if (movies) {
            setFilteredMovies(movies);
        }

        if (query) {
            setQuery(query)
        }

        /*

        if (checkbox) {
            setFilteredMovies(filterShortMovies(movies))
        } else {
            setFilteredMovies(movies)
        }
    */

    }, [])

    useEffect(() => {

        const checkbox = localStorage.getItem('checkbox')
        setShortMovies(checkbox)

    }, [])

function onQueryMovies(query) {

    const moviesList = filterQueryMovies(props.allMovies, query); //фильтруем полученный массив по запросу
    setQueryMovies(moviesList) // добавляем в список запрошенных фильмов

    if (shortMovies) {
        setFilteredMovies(filterShortMovies(moviesList))
    } else {
        setFilteredMovies(moviesList)
    }

    localStorage.setItem('visibleMovies', JSON.stringify(moviesList));
    localStorage.setItem('query', query)
}

function handleShortMovies() {
    localStorage.setItem('checkbox', !shortMovies)
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
            isBurgerOpened={props.isBurgerOpened} />

        <main className="movies">

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
                setAllMovies={props.setAllMovies}
                setSavedMovie={props.setSavedMovie}

                movies={filteredMovies}
            />

        </main>

        <Footer />
    </>
)
}

export default Movies