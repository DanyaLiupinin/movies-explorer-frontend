import React, { useState, useEffect } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
// import movieImage from '../../images/movie-image2.png'

function MoviesCardList(props) {

    const location = useLocation();

    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__container'>

                {
                    props.visibleMovies.map((movie, i) => {
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

            <div className={`movieCardList__button-container ${location.pathname === '/saved-movies' ? 'moviesCardList__button-container_type_saved' : ''}`}>

                {location.pathname === '/movies' ?
                    <button className='movieCardList__button' type='button' onClick={props.showMoreHandler}>Ещё</button>
                    :
                    ''
                }

            </div>
        </section>
    )
}

export default MoviesCardList;