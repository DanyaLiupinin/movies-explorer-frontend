import React, { useEffect, useState } from 'react';
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { filterQueryMovies, filterShortMovies } from '../../utils/utils';
import { getAllMovies } from '../../utils/MoviesApi'

function Movies(props) {

    const [allMovies, setAllMovies] = useState([])
    const [queryMovies, setQueryMovies] = useState([]) // список фильмов по запросу
    const [filteredMovies, setFilteredMovies] = useState([]) // конечный видимый массив
    const [shortMovies, setShortMovies] = useState(false); // состояние чекбокса
    const [query, setQuery] = useState('')
    const [queryError, setQueryError] = useState(false)

    // возвращаем состояния при возвращении на страницу

    useEffect(() => {

        const movies = JSON.parse(localStorage.getItem('visibleMovies'));
        const query = localStorage.getItem('query')
        const check = JSON.parse(localStorage.getItem('check'))
        console.log(check)

        if (check) {
            setShortMovies(true)
        } else {
            setShortMovies(false)
        }

        if (query) {
            setQuery(query)
        }


        if (movies) {

            if (shortMovies) {
                setFilteredMovies(filterShortMovies(movies))

            } else {
                setFilteredMovies(movies)
            }

            setQueryMovies(movies)


        }

    }, [shortMovies])









    function setFilteredMoviesHandler(movies, query) {

        const moviesList = filterQueryMovies(movies, query); //фильтруем полученный массив по запросу
        setQueryMovies(moviesList) // добавляем в список запрошенных фильмов

        if (shortMovies) {
            setFilteredMovies(filterShortMovies(moviesList))
            //localStorage.setItem('visibleMovies', JSON.stringify(filterShortMovies(moviesList)));
        } else {
            setFilteredMovies(moviesList)
            
        }

        localStorage.setItem('visibleMovies', JSON.stringify(moviesList))
        localStorage.setItem('query', query)

    }


    function onQueryMovies(query) {

        if (allMovies.length === 0) {
        
            getAllMovies()
                .then(movies => {
                    setAllMovies(movies);
                    setFilteredMoviesHandler(movies, query);
                })
                .catch(() =>
                    setQueryError(true)
                )
            
        } else {
            setFilteredMoviesHandler(allMovies, query);
        }
    } 

    function handleShortMovies() {
        localStorage.setItem('check', !shortMovies)
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
                    queryError={queryError}
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