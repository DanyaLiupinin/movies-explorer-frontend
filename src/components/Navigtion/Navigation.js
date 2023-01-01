import { Link } from 'react-router-dom'
import profileIcon from '../../images/header-account-icon.svg'
import '../Header/Header.css'

function Navigation({ loggedIn }) {

    return (
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
                        <button type="button" className="header__burger-button header__burger-button_inactive"></button>
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
    )
}

export default Navigation;