import React, { useEffect, useState } from 'react';
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { filterQueryMovies, filterShortMovies } from '../../utils/utils';

function Movies(props) {


    const [queryMovies, setQueryMovies] = useState([]) // список фильмов по запросу
    const [filteredMovies, setFilteredMovies] = useState([]) // конечный видимый массив
    const [shortMovies, setShortMovies] = useState(false); // состояние чекбокса
    const [lastQuery, setLastQuery] = useState('')

    // возвращаем запрос при возвращении на страницу

    useEffect(() => {

        if (localStorage.getItem('visibleMovies')) {
            const movies = JSON.parse(localStorage.getItem('visibleMovies'));
            setFilteredMovies(movies);

        if (localStorage.getItem('query')) {
            const query = localStorage.getItem('query')
            setLastQuery(query)
        }

            /*
            if (localStorage.getItem('shortMovies') === 'true') {
              setFilteredMovies(filterDuration(movies));
            } else {
              setFilteredMovies(movies);
            }
          } else {
            // setIsNotFound(true);
          } 
          */
        }
    }, [])

    function onQueryMovies(query) { //потом добавить короткометражки

        const moviesList = filterQueryMovies(props.allMovies, query); //фильтруем полученный массив по запросу
        setQueryMovies(moviesList) // добавляем в список запрошенных фильмов

        if (shortMovies) {
            setFilteredMovies(filterShortMovies(moviesList))
        } else {
            setFilteredMovies(moviesList)
        }

        //setFilteredMovies(short ? filterDuration(moviesList) : moviesList); //если чекбокс тру, то фильруем по длине и записываем в стейт
        localStorage.setItem('visibleMovies', JSON.stringify(moviesList));
        localStorage.setItem('query', query)
        // setIsNotFound(moviesList.length === 0 ? true : false);
    }

    /*
    useEffect(() => {
      if (filteredMovies.length === 0) {
          setFilteredMovies(props.allMovies)
      }
    }, [filteredMovies, props.allMovies])
    */

    function handleShortMovies() {
        setShortMovies(!shortMovies)

        if (!shortMovies) {
            setFilteredMovies(filterShortMovies(filteredMovies));
        } else {
            setFilteredMovies(queryMovies)
        }
    }



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
                    shortMovies={shortMovies}
                    handleShortMovies={handleShortMovies}
                    queryError={props.queryError}
                    lastQuery={lastQuery}
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