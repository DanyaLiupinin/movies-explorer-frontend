import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {

    const movies = [
    <MoviesCard />,
    <MoviesCard />,
    <MoviesCard />,
    <MoviesCard />,
    <MoviesCard />,
    <MoviesCard />
] 

const [allMovies, setAllMovies] = React.useState(movies)


    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__container'>

            {
                allMovies.map((movie) => {
                    return movie
                })
            }

            </div>
        </section>
    )
}

export default MoviesCardList;