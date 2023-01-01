import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <a href="https://yandex.ru" className="header__link" targer="_blank">
                    <img src={logo} alt="логотип" />
                </a>
                <nav className="header__nav">
                    <Link 
                    className="header__link header__link_type_registration" 
                    to="signup"
                    >Регистрация</Link>
                    <Link 
                    className="header__link header__link_type_authorization" 
                    to="signin"
                    >Войти</Link>
                </nav>
            </div>
        </header>
    )

}

export default Header;