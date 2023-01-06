import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';

function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)


  function handleOnClickBurger() {
    setIsBurgerOpened(!isBurgerOpened)
  }

  /*

  const renderHeaderRoutes = ({ paths, element }) =>
    paths.map((path) => <Route key={path} path={path} element={element} />); // в react router 6 в path нельзя передать массив 
  // чтобы не писать Route 4 раза, можно написать функцию

  */
 
  return (
    <>
      <Routes>

        <Route path="/" element={
        <Main
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleOnClickBurger={handleOnClickBurger}
        isBurgerOpened={isBurgerOpened}
        />
        } />

      </Routes>
    </>
  )
}

export default App;
