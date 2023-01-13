import './MoviesCard.css'


function MoviesCard(props) {

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