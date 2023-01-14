import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)  // отрефакторить // убрать стейты в компоненты


  function handleOnClickBurger() {
    setIsBurgerOpened(!isBurgerOpened)
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
            />} /> :
            <Route path="/movies" element={<Navigate to="/signup" />} />
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