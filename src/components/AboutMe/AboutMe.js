import './AboutMe.css'

import Portfolio from '../Portfolio/Portfolio'
import myPhoto from '../../images/myphoto.jpg'

function AboutMe() {
    return (
        <section className="aboutMe" id='aboutMe'>
            <div className="aboutMe__container main__container">
                <h2 className="aboutMe__title title">Student</h2>
                <div className="aboutMe__student">
                    <div className="aboutMe__information">
                        <h3 className="aboutMe__name">Danila</h3>
                        <p className="aboutMe__profession">Frontend developer, 22 y.o.</p>
                        <p className="aboutMe__description">I was born and raised in Moscow. I studied to be a journalist, but at some point I decided that I did not want to connect my life with this profession. I started doing front-end development. I sincerely fell in love with this business and decided to make it my profession<br/>
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