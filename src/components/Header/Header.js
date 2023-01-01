import logo from '../../images/logo.svg'
import profileIcon from '../../images/header-account-icon.svg'
import { Link } from 'react-router-dom'
import './Header.css'

function Header({ loggedIn }) {

    return (
        <header className="header">
            <div className="header__container">
                <a href="https://yandex.ru" className="header__link" targer="_blank">
                    <img src={logo} alt="логотип" />
                </a>
                <div className="header__nav-container">
                    {!loggedIn ?
                        <nav className="header__nav">
                            <Link
                                className="header__link header__link_type_registration"
                                to="signup">
                                Регистрация
                            </Link>
                            <Link
                                className="header__link header__link_type_authorization"
                                to="signin">
                                Войти
                            </Link>
                        </nav>
                        :
                        <>
                            <nav className="header__nav">
                                <Link
                                    className="header__link header__link_type_movies"
                                    to="movies">
                                    Фильмы
                                </Link>
                                <Link
                                    className="header__link"
                                    to="saved-movies">
                                    Сохраненные фильмы
                                </Link>
                            </nav>
                            <nav className="header__nav">
                                <Link
                                    className="header__link header__link_type_profile"
                                    to="profile">
                                    Аккаунт
                                    <img src={profileIcon} alt="иконка профиля" className="header__profile-icon"></img>
                                </Link>
                            </nav>
                        </>
                    }
                </div>
            </div>
        </header>
    )

}

export default Header;