import './App.css';
import Header from '../Header/Header';
import React, { useState } from 'react';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(true)

  return (
    <Header
    loggedIn={loggedIn}
    setLoggedIn={setLoggedIn}
    />
  )
}

export default App;
