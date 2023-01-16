import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import React from 'react';

function Movies(props) {

    const [movieRequest, setMovieRequest] = React.useState('')

    return (
        <>
            <Header
                loggedIn={props.loggedIn}
                setLoggedIn={props.setLoggedIn}
                handleOnClickBurger={props.handleOnClickBurger}
                isBurgerOpened={props.isBurgerOpened} />

            <main className="movies__main">

                <SearchForm
                    moviesRequest={movieRequest}
                    setMovieRequest={setMovieRequest}
                />

                <MoviesCardList 
                allMovies={props.allMovies}
                setAllMovies={props.setAllMovies}
                setSavedMovie={props.setSavedMovie}
                />

            </main>

            <Footer />
        </>
    )
}

export default Movies