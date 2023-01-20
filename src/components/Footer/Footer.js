import React from "react";
import "./Footer.css"
// import { NavLink } from "react-router-dom"


function Footer() {

    return (

        <footer className="footer">
            <div className="footer__container">
                <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__information">
                    <p className="footer__year">© 2023</p>
                    <div className="footer__links">
                        <a target="_blank" rel='noreferrer' href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/DanyaLiupinin" className="footer__link">Github</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer