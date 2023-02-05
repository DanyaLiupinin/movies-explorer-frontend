import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Preloader/Preloader';
import InfoPopup from '../InfoPopup/InfoPopup';
import { getAllMovies } from '../../utils/MoviesApi';
import { saveMovie, deleteMovie, getSavedMovies, authorization, getUserInfo, updateUserInfo, registration } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/currentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)
  const [allMovies, setAllMovies] = useState([]) // все фильмы
  const [queryError, setQueryError] = useState(false) // ошибка запроса
  const [savedMovies, setSavedMovies] = useState([]) // сохраненные фильмы
  const [preloader, setPreloader] = useState(false)
  const [infoPopup, setInfoPopup] = useState({
    isActive: false,
    successful: false,
    info: ''
  })
  const navigate = useNavigate()
  const root = useLocation();

  function handleOnClickBurger() {
    setIsBurgerOpened(!isBurgerOpened)
  }

  useEffect(() => {

    if (!loggedIn) {
      return
    } else {
      getAllMovies()
        .then((allMovies) => {
          setQueryError(false)
          setAllMovies(allMovies)
        })
        .catch(() => {
          setQueryError(true)

          setInfoPopup({
            isActive: false,
            successful: true,
            info: 'Что-то пошло не так'
          })
        })
    }
  }, [loggedIn])


  useEffect(() => {

    if (!loggedIn) {
      return
    } else {
      getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies.reverse())
        })
        .catch(() => {

          setInfoPopup({
            isActive: false,
            successful: true,
            info: 'Что-то пошло не так'
          })

        })
    }
  }, [loggedIn])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    const path = root.pathname;

    if (jwt) {

      setLoggedIn(true)
      navigate(path)

      getUserInfo()
        .then((userData) => {
          setCurrentUser(userData)
        })
        .catch(() => {

          setInfoPopup({
            isActive: false,
            successful: true,
            info: 'Что-то пошло не так'
          })

        })

    } else {
      setLoggedIn(false)
    }

  }, [loggedIn, navigate, root.pathname])

  function updateUserData(name, email) {
    updateUserInfo(name, email)
      .then((newData) => {
        setCurrentUser(newData)

        setInfoPopup({
          isActive: true,
          successful: true,
          info: 'Ваши данные успешно изменены!'
        })

      })
      .catch(() => {

        setInfoPopup({
          isActive: false,
          successful: true,
          info: 'Что-то пошло не так'
        })

      })
  }

  function saveMoviehandler(movie) {
    saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies])
      })
      .catch(() => {

        setInfoPopup({
          isActive: false,
          successful: true,
          info: 'Что-то пошло не так'
        })

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
      .catch(() => {

        setInfoPopup({
          isActive: false,
          successful: true,
          info: 'Что-то пошло не так'
        })

      })
  }

  function registrationHandler(name, email, password) {
    setPreloader(true)
    registration(name, email, password)
      .then((userData) => {
        if (userData._id) {
          authorizationHandler(userData.email, password)
        }

        setInfoPopup({
          isActive: true,
          successful: true,
          info: 'Регистрация прошла успешно'
        })

      })
      .catch(() => {
        setInfoPopup({
          isActive: true,
          successful: false,
          info: 'Регистрация не удалась. Попробуйте ещё раз'
        })
      })
      .finally(() => {
        setPreloader(false)
      })
  }

  function authorizationHandler(email, password) {
    setPreloader(true)
    authorization(email, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true)
          navigate('/movies')
        }
        setInfoPopup({
          isActive: true,
          successful: true,
          info: 'Авторизация прошла успешно.'
        })
      })
      .catch(() => {
        setInfoPopup({
          isActive: true,
          successful: false,
          info: 'Авторизация не удалась. Попробуйте ещё раз'
        })
      })
      .finally(() => {
        setPreloader(false)
      })
  }

  function signOut() {
    setPreloader(true)

    setTimeout(() => {
      localStorage.clear()
      setLoggedIn(false)
      navigate('/')
      setPreloader(false)
    }, 500)
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
                setPreloader={setPreloader}
                setInfoPopup={setInfoPopup}

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
              <Route path="/movies" element={<Navigate to="/" />} />
          }

          {
            loggedIn ?
              <Route path="/saved-movies" element={<SavedMovies
                setPreloader={setPreloader}
                setInfoPopup={setInfoPopup}

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
              <Route path="/saved-movies" element={<Navigate to="/" />} />
          }

          {
            loggedIn ?
              <Route path="/profile" element={<Profile
                setPreloader={setPreloader}
                //setInfoPopup={setInfoPopup}

                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened}

                signOut={signOut}
                currentUser={currentUser}
                updateUserData={updateUserData}
              />} /> :
              <Route path="/profile" element={<Navigate to="/" />} />
          }

          {
            !loggedIn ?
              <Route path='/signup' element={
                <Register
                  registrationHandler={registrationHandler}
                  setInfoPopup={setInfoPopup}
                />
              } /> :
              <Route path="/signup" element={<Navigate to="/" />} />
          }

          {
            !loggedIn ?
              <Route path='/signin' element={
                <Login
                  authorizationHandler={authorizationHandler}
                />
              } /> :
              <Route path="/signin" element={<Navigate to="/" />} />
          }

          <Route element={
            <NotFound path='*' />
          } />

        </Routes>

        <Preloader
          isActive={preloader}
        />
        <InfoPopup
          infoPopup={infoPopup}
          setInfoPopup={setInfoPopup}
        />

      </CurrentUserContext.Provider>
    </>
  )
}

export default App;

// TODO

// Заменить фотку и информацию на свои в maim

// рефакторинг (отступы, && в классах)

