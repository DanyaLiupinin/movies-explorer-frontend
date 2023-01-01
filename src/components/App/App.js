import './App.css';
import Header from '../Header/Header';
import React, { useState } from 'react';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(true)
  const [ isBurgerOpened, setIsBurgerOpened ] = useState(false)

  function handleOnClickBurger() {
    setIsBurgerOpened(!isBurgerOpened)
  }

  return (
    <Header
    loggedIn={loggedIn}
    setLoggedIn={setLoggedIn}
    handleOnClickBurger={handleOnClickBurger}
    isBurgerOpened={isBurgerOpened}
    />
  )
}

export default App;
