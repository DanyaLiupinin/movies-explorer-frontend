import logo from '../../images/logo.svg'
import './Header.css'
import Navigation from '../Navigtion/Navigation'

function Header({ loggedIn, handleOnClickBurger, isBurgerOpened }) {

    return (
        <header className="header">
            <div className="header__container">
                <a href="https://yandex.ru" className="header__link" targer="_blank">
                    <img src={logo} alt="логотип" />
                </a>
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