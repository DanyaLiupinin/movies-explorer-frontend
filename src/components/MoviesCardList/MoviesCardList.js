import React, { useState, useEffect } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
// import movieImage from '../../images/movie-image2.png'

function MoviesCardList({ allMovies, setAllMovies, setSavedMovies }) {

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
    const [visibleMovies, setVisibleMovies] = useState(allMovies.slice(0, movieCounter)) // загружаем в стейт видимые фильмы

    function showMoreHandler() {
        setMovieCounter(movieCounter + movieStep) // обновляем кол-во видимых фильмов (асинхронно)
        setVisibleMovies(allMovies.slice(0, movieCounter + movieStep)) // предыдущее действие асинхронно, нельзя сразу использоваться counter
    }

    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__container'>

                {
                    visibleMovies.map((movie, i) => {
                        return (
                            <MoviesCard
                                key={i}
                                title={movie.title}
                                image={movie.image}
                                duration={movie.duration}
                            /> // посмотреть в каком виде приходят фильмы с базы данных яндекса
                        )
                    })
                }

            </div>
            <div className='movieCardList__button-container'>
                <button className='movieCardList__button' type='button' onClick={showMoreHandler} >Ещё</button>
            </div>
        </section>
    )
}

export default MoviesCardList;