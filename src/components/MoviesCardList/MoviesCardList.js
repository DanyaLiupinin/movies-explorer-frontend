import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
// import movieImage from '../../images/movie-image2.png'
import movies from '../../utils/constants'

function MoviesCardList() {


    const [movieCounter, setMovieCounter] = React.useState(16)
    const [allMovies, setAllMovies] = React.useState(movies)
    const [visibleMovies, setVisibleMovies] = React.useState(allMovies.slice(0, movieCounter))

    function showMoreHandler() {
        setMovieCounter (movieCounter + 4)

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
                            duration={movie.duration} />
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