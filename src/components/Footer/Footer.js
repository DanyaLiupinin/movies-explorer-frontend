import React from "react";
import "./Footer.css"


function Footer() {

    return (

        <footer className="footer">
            <div className="footer__container">
                <p className="footer__description">Yandex х BeatFilm educational project</p>
                <div className="footer__information">
                    <p className="footer__year">© 2023</p>
                    <div className="footer__links">
                        <a target="_blank" rel='noreferrer' href="https://practicum.yandex.ru/" className="footer__link">Yandex Practicum</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer