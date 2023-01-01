import './App.css';
import Header from '../Header/Header';
import React, { useState } from 'react';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(true)
  const [ isBurgerOpened, setIsBurgerOpened ] = useState(true)

  function handleOnClickBurger() {
    setIsBurgerOpened(true)
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
