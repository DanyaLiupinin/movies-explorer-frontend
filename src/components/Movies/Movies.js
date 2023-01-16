import React, { useState, useEffect } from 'react';
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function Movies(props) {

    const [movieRequest, setMovieRequest] = React.useState('')

    // FOR MovieCardList

    const [width, setWidth] = useState(window.innerWidth) // ширина окна

    const numberOfVisibleFilms = (width) => {
        if (width >= 1051) {
            return 16;
        } else if (width >= 769) {
            return 12;
        } else if (width >= 451) {
            return 8;
        } else {
            return 5;
        }
    }

    const showMoreStep = (width) => {
        if (width >= 1051) {
            return 4;
        } else if (width >= 769) {
            return 3;
        } else if (width >= 451) {
            return 2;
        } else {
            return 1;
        }
    }

    const [movieCounter, setMovieCounter] = useState(numberOfVisibleFilms(width)) // в заивимсоти от ширины устанавливаем кол-во видимых фильмов
    const [movieStep, setMovieStep] = useState(showMoreStep(width)) // сколько фильмов появится при 'показать ещё'
                                                                 // надо ли для этого стейт? или просто переменной  достаточно? 
    const [visibleMovies, setVisibleMovies] = useState(props.allMovies.slice(0, movieCounter)) // загружаем в стейт видимые фильмы

    function showMoreHandler() {
        setMovieCounter(movieCounter + movieStep) // обновляем кол-во видимых фильмов (асинхронно)
        setVisibleMovies(props.allMovies.slice(0, movieCounter + movieStep)) // предыдущее действие асинхронно, нельзя сразу использоваться counter
    }

    //

    return (
        <>
            <Header
                loggedIn={props.loggedIn}
                setLoggedIn={props.setLoggedIn}
                handleOnClickBurger={props.handleOnClickBurger}
                isBurgerOpened={props.isBurgerOpened} />

            <main className="movies__main">

                <SearchForm
                    moviesRequest={movieRequest}
                    setMovieRequest={setMovieRequest}
                />

                <MoviesCardList 
                allMovies={props.allMovies}
                setAllMovies={props.setAllMovies}
                setSavedMovie={props.setSavedMovie}
                visibleMovies={visibleMovies}
                setVisibleMovies={setVisibleMovies}
                showMoreHandler={showMoreHandler}
                />

            </main>

            <Footer />
        </>
    )
}

export default Movies