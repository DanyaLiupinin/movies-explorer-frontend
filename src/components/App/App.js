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
import { getAllMovies } from '../../utils/MoviesApi';
import { saveMovie, deleteMovie, getSavedMovies, authorization, getUserInfo, updateUserInfo, registration } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/currentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)  // отрефакторить // убрать стейты в компоненты
  const [allMovies, setAllMovies] = useState([]) // все фильмы
  const [queryError, setQueryError] = useState(false) // ошибка запроса
  const [savedMovies, setSavedMovies] = useState([]) // сохраненные фильмы
  const [preloader, setPreloader] = useState(false)
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
        .catch((err) => {
          console.log(`ошибка ${err}`)
        })
    }
  }, [loggedIn])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt') // +добавление информации о пользователе
    const path = root.pathname;

    if (jwt) {

      setLoggedIn(true)
      navigate(path)

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

  }, [loggedIn, navigate, root.pathname])

  function updateUserData(name, email) {
    updateUserInfo(name, email)
      .then((newData) => {
        setCurrentUser(newData)
      })
      .catch((err) => {
        console.log(err)
      })
  }


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

  function registrationHandler(name, email, password) {
    registration(name, email, password)
      .then((userData) => {
        if (userData._id) {
          authorizationHandler(userData.email, password)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function authorizationHandler(email, password) {

    authorization(email, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true)
          navigate('/')
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
                updateUserData={updateUserData}
              />} /> :
              <Route path="/profile" element={<Navigate to="/signup" />} />
          }

          <Route path='/signup' element={
            <Register
              registrationHandler={registrationHandler}
            />
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
        <Preloader 
        isActive={preloader}
        />

      </CurrentUserContext.Provider>
    </>
  )
}

export default App;

// TODO

// Preloader

// Заменить фотку и информацию на свои в maim