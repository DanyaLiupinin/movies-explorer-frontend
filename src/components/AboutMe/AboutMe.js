import './AboutMe.css'

import Portfolio from '../Portfolio/Portfolio'
import myPhoto from '../../images/myphoto.jpg'

function AboutMe() {
    return (
        <section className="aboutMe" id='aboutMe'>
            <div className="aboutMe__container main__container">
                <h2 className="aboutMe__title title">Студент</h2>
                <div className="aboutMe__student">
                    <div className="aboutMe__information">
                        <h3 className="aboutMe__name">Даня</h3>
                        <p className="aboutMe__profession">Фронтенд-разработчик, 21 год</p>
                        <p className="aboutMe__description">Я родился и вырос в Москве. Учился на журналиста, но в какой-то момент решил, что мне не хотелось бы связывать жизнь с этой профессией. Так через какое-то время я начал заниматься фронтенд разработкой. Искренне полюбил это дело, и даже спустя год с трепетом и предвкушением сажусь за любой проект.<br/>
                        В свободное время занимаюсь тем, что меня больше всего воодушевляет - музыкой и спортом.
                        </p>
                        <div className="aboutMe__links">
                            <a target="_blank" rel='noreferrer' className="aboutMe__link" href="https://github.com/DanyaLiupinin">Github</a>
                        </div>
                    </div>
                    <img className="aboutMe__photo" alt='фотография' src={myPhoto} ></img>
                </div>
                <Portfolio />
            </div>
        </section>
    )
}

export default AboutMe