import './Portfolio.css'
import arrow from '../../images/portfolio-link-image.svg'

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Portfolio</h3>
            <ul className="portfolio__links">
                <li className="portfolio__link-container">
                    <a target="_blank" rel='noreferrer' href="https://danyaliupinin.github.io/how-to-learn/" className="portfolio__link">Статичный сайт
                        <img src={arrow} alt="стрелочка-ссылка" className="portfolio__link-image"></img>
                    </a>
                </li>
                <li className="portfolio__link-container">
                    <a target="_blank" rel='noreferrer' href="https://danyaliupinin.github.io/russian-travel/index.html" className="portfolio__link">Адаптивный сайт
                        <img src={arrow} alt="стрелочка-ссылка" className="portfolio__link-image"></img>
                    </a>
                </li>
                <li className="portfolio__link-container">
                    <a target="_blank" rel='noreferrer' href="https://github.com/DanyaLiupinin/react-mesto-api-full" className="portfolio__link">Одностраничное приложение
                        <img src={arrow} alt="стрелочка-ссылка" className="portfolio__link-image"></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio