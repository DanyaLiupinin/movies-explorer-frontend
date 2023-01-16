import React, { useState, useEffect } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
// import movieImage from '../../images/movie-image2.png'

function MoviesCardList({ allMovies, setAllMovies, setSavedMovies }) {

    const [width, setWidth] = useState(window.innerWidth) // ширина окна

    const numberOfVisibleFilms = (width) => {
        if (width >= 1280) {
            return 16;
        } else if (width >= 768) {
            return 8;
        } else {
            return 5;
        }
    }

    const [movieCounter, setMovieCounter] = useState(numberOfVisibleFilms(width))
    const [visibleMovies, setVisibleMovies] = useState(allMovies.slice(0, movieCounter))

    
    useEffect(() => {

        setWidth(window.innerWidth)

    }, [width])
    


    function showMoreHandler() {
        setMovieCounter(movieCounter + 4) // разобраться почему карточки рендерятся только после второго клика
        // перенести рендер начального массива карточек в useeffect

        setVisibleMovies(allMovies.slice(0, movieCounter))

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