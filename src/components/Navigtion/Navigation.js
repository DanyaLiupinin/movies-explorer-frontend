import { Link } from 'react-router-dom'
import profileIcon from '../../images/header-account-icon.svg'
import '../Header/Header.css'
import './Navigation.css'

function Navigation({ loggedIn }) {

    return (
        <div className="navigation">
            {!loggedIn ?
                <nav className="navigation__nav">
                    <Link
                        className="navigation__link navigation__link_type_registration"
                        to="signup">
                        Регистрация
                    </Link>
                    <Link
                        className="navigation__link navigation__link_type_authorization"
                        to="signin">
                        Войти
                    </Link>
                </nav>
                :
                <>
                    <button type="button" className="navigation__burger-button"></button>
                    <nav className="navigation__nav">
                        <Link
                            className="navigation__link navigation__link_type_movies"
                            to="movies">
                            Фильмы
                        </Link>
                        <Link
                            className="navigation__link"
                            to="saved-movies">
                            Сохраненные фильмы
                        </Link>
                    </nav>
                    <nav className="navigation__nav">
                        <Link
                            className="navigation__link navigation__link_type_profile"
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