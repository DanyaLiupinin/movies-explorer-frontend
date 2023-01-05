import './App.css';
import Header from '../Header/Header';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)


  function handleOnClickBurger() {
    setIsBurgerOpened(!isBurgerOpened)
  }

  const renderHeaderRoutes = ({ paths, element: Element }) =>
    paths.map((path) => <Route key={path} path={path} element={Element} />); // в react router 6 в path нельзя передать массив 
                                                                            // чтобы не писать Route 4 раза, можно написать функцию
  return (

    <Routes>

        {renderHeaderRoutes({
          paths: ['/movies', '/saved-movies', '/profile', '/'],
          element:
            <Header
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              handleOnClickBurger={handleOnClickBurger}
              isBurgerOpened={isBurgerOpened} />
        })}

    </Routes>

  )
}

export default App;
