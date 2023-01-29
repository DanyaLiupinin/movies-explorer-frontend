import React, { useEffect, useState } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { isMovieSaved } from '../../utils/utils';

function MoviesCardList(props) {

    const location = useLocation();

    const [width, setWidth] = useState(window.innerWidth)

    const numberOfVisibleFilms = (width) => { // REFACTORING: заменить на конфиг-объект
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
    const movieStep = showMoreStep(width)
    // сколько фильмов появится при 'показать ещё'

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', setWidth(window.innerWidth));  // проетстить в конце изменение кол-ва фильмов
        }, 500);
    });

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
                                    movie={movie}
                                    image={movie.image.url}
                                    title={movie.nameRU}
                                    duration={movie.duration}
                                    trailer={movie.trailerLink}
                                    saveMovie={props.saveMovie}
                                    deleteMovie={props.deleteMovie}

                                    movieSaved={isMovieSaved(props.savedMovies, movie)}
                                />
                            </React.Fragment>
                        )
                    })
                }

            </ul>

            <div className={`moviesCardList__button-container ${location.pathname === '/saved-movies' ? 'moviesCardList__button-container_type_saved' : ''}`}>

                {location.pathname === '/movies' && props.movies.length > movieCounter ?
                    <button className='moviesCardList__button' type='button' onClick={showMoreHandler}>Ещё</button>
                    :
                    ''
                }

            </div>
        </section>
    )
}

export default MoviesCardList;