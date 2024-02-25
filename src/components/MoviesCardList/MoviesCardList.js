import React, { useEffect, useState } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { isMovieSaved } from '../../utils/utils';
import { numberOfVisibleFilms, showMoreStep } from '../../utils/constants';

function MoviesCardList(props) {

    const location = useLocation();

    const [width, setWidth] = useState(window.innerWidth)

    const [movieCounter, setMovieCounter] = useState(numberOfVisibleFilms(width))
    // кол-во фильмов в зависимсоти от ширины
    const movieStep = showMoreStep(width)
    // сколько фильмов появится при 'показать ещё'

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', setWidth(window.innerWidth)); 
        }, 500);
    });

    function showMoreHandler() {
        setMovieCounter(movieCounter + movieStep)
    }

    return (
        <section className='moviesCardList'>
            <ul className='moviesCardList__container'>

                {

                    props.movies ?

                        location.pathname === '/movies' ?

                            props.movies.slice(0, movieCounter).map((movie) => {
                                return (
                                    <React.Fragment key={movie.id}>
                                        <MoviesCard
                                            movie={movie}
                                            image={`https://api.nomoreparties.co${movie.image.url}`}
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

                            :

                            props.movies.slice(0, movieCounter).map((movie) => {
                                return (
                                    <React.Fragment key={movie._id}>
                                        <MoviesCard
                                            movie={movie}
                                            image={movie.image}
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

                        : ''
                }



            </ul>

            <div className={`moviesCardList__button-container ${location.pathname === '/saved-movies' ? 'moviesCardList__button-container_type_saved' : ''}`}>

                {/*location.pathname === '/movies' && */ props.movies.length > movieCounter ?
                    <button className='moviesCardList__button' type='button' onClick={showMoreHandler}>More</button>
                    :
                    ''
                }

            </div>
        </section>
    )
}

export default MoviesCardList;