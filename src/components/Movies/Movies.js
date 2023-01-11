import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import React from 'react';

function Movies({ loggedIn, setLoggedIn, handleOnClickBurger, isBurgerOpened }) {

    const [movieRequest, setMovieRequest] = React.useState('')

    return (
        <>
            <Header
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened} />

            <main className="movies__main">
                <SearchForm
                    moviesRequest={movieRequest}
                    setMovieRequest={setMovieRequest}
                />
            </main>
        </>
    )
}

export default Movies