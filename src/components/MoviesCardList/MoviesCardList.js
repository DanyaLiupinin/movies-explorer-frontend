import React, { useEffect, useState } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {

    const location = useLocation();

    const width = window.innerWidth // ширина окна

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

    const [movieCounter, setMovieCounter] = useState(numberOfVisibleFilms(width)) 
    // кол-во фильмов в зависимсоти от ширины
    const movieStep = showMoreStep(width) // сколько фильмов появится при 'показать ещё'

    
    function showMoreHandler() {
        setMovieCounter(movieCounter + movieStep)
    }

    return (
        <section className='moviesCardList'>
            <ul className='moviesCardList__container'>

                {
                    props.movies.slice(0, movieCounter).map((movie) => {
                        return (
                            <React.Fragment key={movie.id}>
                                <MoviesCard
                                    title={movie.nameRU}
                                    duration={movie.duration}
                                    image={`https://api.nomoreparties.co/${movie.image.url}`}
                                />
                            </React.Fragment>
                        )
                    })
                }

            </ul>

            <div className={`moviesCardList__button-container ${location.pathname === '/saved-movies' ? 'moviesCardList__button-container_type_saved' : ''}`}>

                {location.pathname === '/movies' ?
                    <button className='moviesCardList__button' type='button' onClick={showMoreHandler}>Ещё</button>
                    :
                    ''
                }

            </div>
        </section>
    )
}

export default MoviesCardList;