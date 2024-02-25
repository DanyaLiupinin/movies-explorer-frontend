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
        const checkbox = JSON.parse(localStorage.getItem('checkbox'))

        if (query) {
            setQuery(query)
        }

        if (movies) {
            setQueryMovies(movies)
        }

        if (movies && checkbox) {
            setFilteredMovies(filterShortMovies(movies))
            setShortMovies(true)
        } else if (movies && !checkbox) {
            setFilteredMovies(movies)
            setShortMovies(false)
        }

    }, [])


    function setFilteredMoviesHandler(movies, query) {

        const moviesList = filterQueryMovies(movies, query); //фильтруем полученный массив по запросу
        setQueryMovies(moviesList) // добавляем в список запрошенных фильмов

        if (moviesList.length === 0) {
            props.setInfoPopup({
                isActive: true,
                successful: false,
                info: 'Sorry, we didnt find anything. Try again.'
            })
        }

        if (shortMovies) {
            const filteredMovieList = filterShortMovies(moviesList)
            setFilteredMovies(filteredMovieList)


        } else {
            setFilteredMovies(moviesList)

        }

        localStorage.setItem('visibleMovies', JSON.stringify(moviesList))
        localStorage.setItem('query', query)

    }

    function onQueryMovies(query) {
        props.setPreloader(true)
        setTimeout(() => {
            setFilteredMoviesHandler(props.allMovies, query);
            props.setPreloader(false)
        }, 500)
    }

    function handleShortMovies() {
        props.setPreloader(true)

        setTimeout(() => {
            localStorage.setItem('checkbox', !shortMovies)
            setShortMovies(!shortMovies)

            if (!shortMovies) {
                const filteredShortList = filterShortMovies(filteredMovies)
                setFilteredMovies(filteredShortList);

                if (filteredShortList.length === 0) {
                    props.setInfoPopup({
                        isActive: true,
                        successful: false,
                        info: 'Sorry, we didnt find anything. Try again.'
                    })
                }

            } else {
                setFilteredMovies(queryMovies)
            }
            props.setPreloader(false)
        }, 300)
        
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
                    movies={filteredMovies}

                    saveMovie={props.saveMovie}
                    deleteMovie={props.deleteMovie}

                    savedMovies={props.savedMovies}
                />

            </main>

            <Footer />
        </>
    )
}

export default Movies