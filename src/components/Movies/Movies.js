import React, { useEffect, useState } from 'react';
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { filterMovies } from '../../utils/utils';

function Movies(props) {


    const [filteredMovies, setFilteredMovies] = useState([])

    //

    function onQueryMovies (query) { //потом добавить короткометражки

        const moviesList = filterMovies(props.allMovies, query); //фильтруем полученный массив по запросу
        
        setFilteredMovies(moviesList)

        //setFilteredMovies(short ? filterDuration(moviesList) : moviesList); //если чекбокс тру, то фильруем по длине и записываем в стейт
        /*
        localStorage.setItem('movies', JSON.stringify(moviesList));
        localStorage.setItem('allMovies', JSON.stringify(movies));
        */
        // setIsNotFound(moviesList.length === 0 ? true : false);
      }

      /*
      useEffect(() => {
        if (filteredMovies.length === 0) {
            setFilteredMovies(props.allMovies)
        }
      }, [filteredMovies, props.allMovies])
      */


    return (
        <>
            <Header
                loggedIn={props.loggedIn}
                setLoggedIn={props.setLoggedIn}
                handleOnClickBurger={props.handleOnClickBurger}
                isBurgerOpened={props.isBurgerOpened} />

            <main className="movies">

                <SearchForm

                    onQueryMovies={onQueryMovies}
                />

                <MoviesCardList 
                allMovies={props.allMovies}
                setAllMovies={props.setAllMovies}
                setSavedMovie={props.setSavedMovie}

                movies={filteredMovies}
                />

            </main>

            <Footer />
        </>
    )
}

export default Movies