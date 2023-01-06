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
                        <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                        <a href="https://github.com/DanyaLiupinin" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer