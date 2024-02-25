import logo from '../../images/logo.svg'
import './Header.css'
import Navigation from '../Navigtion/Navigation'
import { Link } from 'react-router-dom'

function Header({ loggedIn, handleOnClickBurger, isBurgerOpened }) {

    return (
        <header className="header">
            <div className="header__container">
                <Link to='/' className="header__link">
                    <img src={logo} alt="logo" />
                </Link>
                <Navigation 
                loggedIn={loggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened}
                />
            </div>
        </header>
    )

}

export default Header;