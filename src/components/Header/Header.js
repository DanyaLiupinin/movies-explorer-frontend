import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <a href="https://yandex.ru" className="header__link" targer="_blank">
                    <img src={logo} alt="логотип" />
                </a>
                <nav className="header__nav">
                    <Link 
                    className="header__registration-link" 
                    to="signup"
                    >
                        Регистрация</Link>
                </nav>
            </div>
        </header>
    )

}

export default Header;