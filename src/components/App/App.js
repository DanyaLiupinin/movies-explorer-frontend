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

function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)  // отрефакторить // убрать стейты в компоненты
  const [allMovies, setAllMovies] = useState([]) // все фильмы
  const [queryError, setQueryError] = useState(false) // ошибка запроса
  const [savedMovies, setSavedMovie] = useState([])

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