import './Portfolio.css'
import arrow from '../../images/portfolio-link-image.svg'

function Portfolio () {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__links">
                <div className="portfolio__link-container">
                    <a href="https://danyaliupinin.github.io/how-to-learn/" className="portfolio__link">Статичный сайт</a>
                    <img src={arrow} alt="стрелочка-ссылка" className="portfolio__link-image"></img>
                </div>
                 <div className="portfolio__link-container">
                    <a href="https://danyaliupinin.github.io/russian-travel/index.html" className="portfolio__link">Адаптивный сайт</a>
                    <img src={arrow} alt="стрелочка-ссылка" className="portfolio__link-image"></img>
                </div>
                 <div className="portfolio__link-container">
                    <a href="https://github.com/DanyaLiupinin/react-mesto-api-full" className="portfolio__link">Одностраниченое приложение</a>
                    <img src={arrow} alt="стрелочка-ссылка" className="portfolio__link-image"></img>
                </div>
            </div>
        </div>
    )
}

export default Portfolio