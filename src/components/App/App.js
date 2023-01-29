import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import { getAllMovies } from '../../utils/MoviesApi';
import { saveMovie, deleteMovie, getSavedMovies } from '../../utils/MainApi';

function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)  // отрефакторить // убрать стейты в компоненты
  const [allMovies, setAllMovies] = useState([]) // все фильмы
  const [queryError, setQueryError] = useState(false) // ошибка запроса
  const [savedMovies, setSavedMovie] = useState([]) // сохраненные фильмы

  function handleOnClickBurger() {
    setIsBurgerOpened(!isBurgerOpened)
  }

  useEffect(() => {
    getAllMovies()
      .then((allMovies) => {
        setQueryError(false)
        setAllMovies(allMovies)
      })
      .catch(() => {
        setQueryError(true)
      })
  }, [])

  useEffect(() => {
    getSavedMovies()
    .then((movies) => {
      setSavedMovie(movies)
    })
  })

  function saveMoviehandler(movie) {
    saveMovie(movie)
      .then((movie) => {
        setSavedMovie([movie, ...savedMovies])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function deleteMovieHandler(movie) {

    const savedMovie = savedMovies.find(
      (i) => i.movieId === movie.id || i.movieId === movie.movieId
    );

    deleteMovie(savedMovie._id)
      .then((movie) => {
        const newSavedMoviesList = savedMovies.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false
          } else {
            return true
          }
        })
        setSavedMovie(newSavedMoviesList)
        })
        .catch((err) => {
          console.log(err)
        })
      }

  return (
      <>
        <Routes>
          <Route path="/" exact element={
            <Main
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              handleOnClickBurger={handleOnClickBurger}
              isBurgerOpened={isBurgerOpened}
            />
          } />

          {
            loggedIn ?
              <Route path="/movies" element={<Movies
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened}

                allMovies={allMovies}
                queryError={queryError}

                saveMovie={saveMoviehandler}
                deleteMovie={deleteMovieHandler}

                savedMovies={savedMovies}

              />} /> :
              <Route path="/movies" element={<Navigate to="/signup" />} />
          }

          {
            loggedIn ?
              <Route path="/saved-movies" element={<SavedMovies
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened}

                allMovies={allMovies}
                queryError={queryError}
                savedMovies={savedMovies}
                setSavedMovie={setSavedMovie}
              />} />
              :
              <Route path="/profile" element={<Navigate to="/signup" />} />
          }

          {
            loggedIn ?
              <Route path="/profile" element={<Profile
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened}
              />} /> :
              <Route path="/profile" element={<Navigate to="/signup" />} />
          }

          <Route path='/signup' element={
            <Register />
          } />

          <Route path='/signin' element={
            <Login />
          } />

          <Route path='*' element={
            <NotFound />
          } />

        </Routes>
      </>
    )
  }

  export default App;

// TODO

// Preloader

// Заменить фотку и информацию на свои в maim