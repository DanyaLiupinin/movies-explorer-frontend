import React from 'react';
import { NavLink } from 'react-router-dom'
import profileIcon from '../../images/header-account-icon.svg'
import '../Header/Header.css'
import './Navigation.css'
import Burger from '../Burger/Burger.js'

function Navigation({ loggedIn, handleOnClickBurger, isBurgerOpened }) {

    const typeActiveLink = (isBurgerOpened ? ' navigation__link_active_mobile ' : ' navigation__link_active_desktop ')

    return (
        <>
            {!loggedIn ?
                <div className="navigation">
                    <nav className="navigation__nav">
                        <NavLink
                            className="navigation__link navigation__link_type_registration"
                            to="/signup">
                            Регистрация
                        </NavLink>
                        <NavLink
                            className="navigation__link navigation__link_type_authorization"
                            to="/signin">
                            Войти
                        </NavLink>
                    </nav>
                </div>
                :
                <>
                    <Burger
                        handleOnClickBurger={handleOnClickBurger}
                        isBurgerOpened={isBurgerOpened}
                    />
                    <div className={`navigation navigation_burger ${isBurgerOpened ? 'navigation_burger_opened' : ''}`}>
                        <nav className={`navigation__nav navigation__nav_burger ${isBurgerOpened ? 'navigation__nav_burger_opened' : ''}`}>
                            <NavLink
                                className={({isActive}) =>
                                "navigation__link navigation__link_type_main navigation__link_burger" +
                                    (isActive ? typeActiveLink : '')
                                }
                                end // вместо exact 
                                to="/"
                                >
                                Главная
                            </NavLink>
                            <NavLink
                                className={({isActive}) =>
                                "navigation__link navigation__link_type_movies navigation__link_burger" +
                                    (isActive ? typeActiveLink : '')
                                }
                                to="/movies">
                                Фильмы
                            </NavLink>
                            <NavLink
                                className={({isActive}) =>
                                "navigation__link navigation__link_burger" +
                                    (isActive ? typeActiveLink : '')
                                }
                                to="/saved-movies">
                                Сохраненные фильмы
                            </NavLink>
                        </nav>
                        <nav className="navigation__nav navigation__nav_burger">
                            <NavLink
                                className={({isActive}) =>
                                "navigation__link navigation__link_type_profile navigation__link_burger" +
                                    (isActive ? typeActiveLink : '')
                                }
                                to="/profile">
                                Аккаунт
                                <img src={profileIcon} alt="иконка профиля" className="header__profile-icon"></img>
                            </NavLink>
                        </nav>
                    </div>
                </>
            }
        </>
    )
}

export default Navigation;