import './MoviesCard.css'
import { useLocation } from 'react-router-dom';


function MoviesCard(props) {

    const location = useLocation();


    return (

        <div className='movie'>
            <div className='movie__image-container'>
                <img className='movie__image' src={props.image} alt={`кадр из фильма ${props.title}`}></img>
            </div>
            <div className='movie__description'>
                <div className='movie__information'>
                    <p className='movie__title'>{props.title}</p>
                    <p className='movie__duration'>{props.duration}</p>
                </div>
                <div className='movie__button-container'>

                {location.pathname === '/movies' ?  

                    <label className='movie__button-label'>
                        <input className='movie__button' type='checkbox' id="movie__save-button"></input>
                        <span className='movie__custom-button'></span>
                    </label>

                    :

                    <button type='button' className='movie__button-delete'></button>

                }

                </div>
            </div>
        </div>

    )
}

export default MoviesCard