import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

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


      </Routes>
    </> 
  )
}

export default App;