import './App.css';
import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import { getAllMovies } from '../../utils/MoviesApi';
import { saveMovie, deleteMovie, getSavedMovies, authorization, getUserInfo } from '../../utils/MainApi';

function App() {

  const CurrentUserContext = createContext();

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)  // отрефакторить // убрать стейты в компоненты
  const [allMovies, setAllMovies] = useState([]) // все фильмы
  const [queryError, setQueryError] = useState(false) // ошибка запроса
  const [savedMovies, setSavedMovies] = useState([]) // сохраненные фильмы
  const navigate = useNavigate()

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
        setSavedMovies(movies.reverse())
      })
      .catch((err) => {
        console.log(`ошибка ${err}`)
      })
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt') // +добавление информации о пользователе

    if (jwt) {

      setLoggedIn(true)
      navigate('/')

      getUserInfo()
        .then((userData) => {
          setCurrentUser(userData)
        })
        .catch((err) => {
          console.log(err)
        })

    } else {
      setLoggedIn(false)
    }

  }, [loggedIn])


  function saveMoviehandler(movie) {
    saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies])
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
          if (movie._id === m.movieId || movie.movieId === m.movieId) {
            return false
          } else {
            return true
          }
        })
        setSavedMovies(newSavedMoviesList)
      })
      .catch((err) => {
        console.log(err)  // написать нормальную обработку ошибок
      })
  }

  function authorizationHandler(email, password) {

    authorization(email, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true)
          navigate('/')
          console.log(jwt)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function signOut() {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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

                //allMovies={allMovies}
                queryError={queryError}

                saveMovie={saveMoviehandler}
                deleteMovie={deleteMovieHandler}

                savedMovies={savedMovies}
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

                signOut={signOut}
                currentUser={currentUser}
              />} /> :
              <Route path="/profile" element={<Navigate to="/signup" />} />
          }

          <Route path='/signup' element={
            <Register />
          } />

          <Route path='/signin' element={
            <Login
              authorizationHandler={authorizationHandler}
            />
          } />

          <Route path='*' element={
            <NotFound />
          } />

        </Routes>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App;

// TODO

// Preloader

// Заменить фотку и информацию на свои в maim