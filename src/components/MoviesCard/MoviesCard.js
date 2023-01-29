import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css'

function MoviesCard(props) {

    const location = useLocation();

    const [savedMovie, setSavedMovie] = useState(false)

    function toggleMovieState () {
        setSavedMovie(!savedMovie)
    }

    return (

        <li className='movie'>
            <div className='movie__image-container'>
                <a className='movie__trailerLink' href={props.trailer} target='_blank' rel="noreferrer">
                <img className='movie__image' src={`https://api.nomoreparties.co${props.image}`} alt={`кадр из фильма ${props.title}`}></img>
                </a>
            </div>
            <div className='movie__description'>
                <div className='movie__information'>
                    <h3 className='movie__title'>{props.title}</h3>
                    <p className='movie__duration'>{props.duration}</p>
                </div>
                <div className='movie__button-container'>

                {location.pathname === '/movies' ?  

                    <label className='movie__button-label'>
                        <input className='movie__button' checked={savedMovie ? true : false} type='checkbox' id="movie__save-button" onChange={toggleMovieState}></input>
                        <span className='movie__custom-button'></span>
                    </label>

                    :

                    <button type='button' className='movie__button-delete'></button>

                }

                </div>
            </div>
        </li>

    )
}

export default MoviesCard