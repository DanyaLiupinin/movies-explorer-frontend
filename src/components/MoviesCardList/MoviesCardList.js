import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
// import movieImage from '../../images/movie-image2.png'

function MoviesCardList(props) {


    const [movieCounter, setMovieCounter] = React.useState(16)

    const [visibleMovies, setVisibleMovies] = React.useState(props.allMovies.slice(0, movieCounter))

    function showMoreHandler() {
        setMovieCounter (movieCounter + 4) // разобраться почему карточки рендерятся только после второго клика
                                            // перенести рендер начального массива карточек в useeffect

        setVisibleMovies(props.allMovies.slice(0, movieCounter))  

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