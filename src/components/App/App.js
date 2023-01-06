import './App.css';
import Header from '../Header/Header';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer'

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
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleOnClickBurger={handleOnClickBurger}
        isBurgerOpened={isBurgerOpened} />

      <Routes>





        <Route path="/" element={<Footer />} />

      </Routes>
    </>
  )
}

export default App;
