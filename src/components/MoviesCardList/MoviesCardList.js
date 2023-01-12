import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {

    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__container'>

            <MoviesCard />

            </div>
        </section>
    )
}

export default MoviesCardList;