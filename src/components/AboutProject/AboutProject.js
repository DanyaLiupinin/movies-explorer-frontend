import './AboutProject.css'
import '../App/App.css'

function AboutProject() {
    return (
        <section className="aboutProject">
            <div className="aboutProject__container">
                <h2 className="aboutProject__title title">О проекте</h2>
                <div className="aboutProject__information">
                    <div className="aboutProject__information-block">
                        <p className="aboutProject__thesis">
                            Дипломный проект включал 5 этапов
                        </p>
                        <p className="aboutProject__description">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="aboutProject__information-block">
                        <p className="aboutProject__thesis">
                            На выполнение диплома ушло 5 недель
                        </p>
                        <p className="aboutProject__description">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="aboutProject__sprints">

                    <div className="aboutProject__sprint aboutProject__sprint_type_backend">
                        <p className="aboutProject__sprint-duration aboutProject__sprint-duration_type_backend">
                            1 неделя
                        </p>
                        <p className="aboutProject__sprint-title" >
                            Back-end
                        </p>
                    </div>

                    <div className="aboutProject__sprint aboutProject__sprint_type_frontend">
                        <p className="aboutProject__sprint-duration aboutProject__sprint-duration_type_frontend">
                            4 недели
                        </p>
                        <p className="aboutProject__sprint-title" >
                            Front-end
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject