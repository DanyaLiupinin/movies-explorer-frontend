import './AboutMe.css'
import aboutMePhoto from '../../images/aboutme-photo.png'

function AboutMe() {
    return (
        <section className="aboutMe">
            <div class="aboutMe__container main__container">
                <h2 className="aboutMe__title title">Студент</h2>
                <div className="aboutMe__student">
                    <img className="aboutMe__photo" alt='фотография' src={aboutMePhoto} ></img>
                    <h3 className="aboutMe__name">Виталий</h3>
                    <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="aboutMe__links">
                        <a className="aboutMe__link" href="https://github.com/DanyaLiupinin">Github</a>
                    </div>
                </div>
                <div>
                    <p>тут должен быть компонент портфолио</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe