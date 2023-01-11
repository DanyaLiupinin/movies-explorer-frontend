import './Movies.css'
import Header from '../Header/Header'

function Movies ({ loggedIn, setLoggedIn, handleOnClickBurger, isBurgerOpened }) {
    
    return (
        <Header
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened} />
    )
}

export default Movies