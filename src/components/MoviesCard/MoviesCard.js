import './MoviesCard.css'
import movieImage from '../../images/movie-image.png'

function MoviesCard() {

    return (

        <div className='movie'>
            <div className='movie__image-container'>
                <img className='movie__image' src={movieImage} alt='кадр из фильма'></img>
            </div>
            <div className='movie__description'>
                <div className='movie__information'>
                    <p className='movie__title'>33 слова о дизайне</p>
                    <p className='movie__duration'>1ч42м</p>
                </div>
                <div className='movie__button-container'>
                    <label className='movie__button-label'>
                        <input className='movie__button' type='checkbox' id="movie__save-button"></input>
                        <span className='movie__custom-button'></span>
                    </label>
                </div>
            </div>
        </div>
        
    )
}

export default MoviesCard