import { Link } from 'react-router-dom'
import profileIcon from '../../images/header-account-icon.svg'
import '../Header/Header.css'
import './Navigation.css'
import Burger from '../Burger/Burger.js'

function Navigation({ loggedIn, handleOnClickBurger, isBurgerOpened }) {

    return (
        <>
            {!loggedIn ?
                <div className="navigation">
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
                </div>
                :
                <div className={`navigation ${isBurgerOpened ? 'navigation_burger_opened' : ''}`}>
                    <Burger
                        handleOnClickBurger={handleOnClickBurger}
                        isBurgerOpened={isBurgerOpened}
                    />
                    <nav className={`navigation__nav ${isBurgerOpened ? 'navigation__nav_burger_opened' : ''}`}>
                        {isBurgerOpened ?
                            <Link
                                className={`navigation__link navigation__link_type_main ${isBurgerOpened ? 'navigation__link_burger_opened' : ''}`}
                                to="/">
                                Главная
                            </Link>
                            : ''
                        }
                        <Link
                            className={`navigation__link navigation__link_type_movies ${isBurgerOpened ? 'navigation__link_burger_opened' : ''}`}
                            to="movies">
                            Фильмы
                        </Link>
                        <Link
                            className={`navigation__link ${isBurgerOpened ? 'navigation__link_burger_opened' : ''}`}
                            to="saved-movies">
                            Сохраненные фильмы
                        </Link>
                    </nav>
                    <nav className={`navigation__nav ${isBurgerOpened ? 'navigation__nav_burger_opened' : ''}`}>
                        <Link
                            className={`navigation__link navigation__link_type_profile ${isBurgerOpened ? 'navigation__link_burger_opened' : ''}`}
                            to="profile">
                            Аккаунт
                            <img src={profileIcon} alt="иконка профиля" className="header__profile-icon"></img>
                        </Link>
                    </nav>
                </div>
            }
        </>
    )
}

export default Navigation;