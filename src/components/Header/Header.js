import logo from '../../images/logo.svg'
import './Header.css'
import Navigation from '../Navigtion/Navigation'

function Header({ loggedIn }) {

    return (
        <header className="header">
            <div className="header__container">
                <a href="https://yandex.ru" className="header__link" targer="_blank">
                    <img src={logo} alt="логотип" />
                </a>
                <Navigation 
                loggedIn={loggedIn}
                />
            </div>
        </header>
    )

}

export default Header;