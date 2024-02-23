import './AboutProject.css'
import '../App/App.css'
import '../Main/Main.css'

function AboutProject() {
    return (
        <section className="aboutProject" id='aboutProject'>
            <div className="aboutProject__container main__container">
                <h2 className="aboutProject__title title">About project</h2>
                <div className="aboutProject__information">
                    <div className="aboutProject__information-block">
                        <p className="aboutProject__thesis">
                            The diploma project included 5 stages
                        </p>
                        <p className="aboutProject__description">
                            Drawing up a plan, working on the backend, layout, adding functionality and final improvements.
                        </p>
                    </div>
                    <div className="aboutProject__information-block">
                        <p className="aboutProject__thesis">
                            It took 5 weeks to complete the diploma
                        </p>
                        <p className="aboutProject__description">
                            Each stage had a soft and hard deadline that had to be met in order to successfully defend.
                        </p>
                    </div>
                </div>
                <div className="aboutProject__sprints">

                    <div className="aboutProject__sprint aboutProject__sprint_type_backend">
                        <p className="aboutProject__sprint-duration aboutProject__sprint-duration_type_backend">
                            1 week
                        </p>
                        <p className="aboutProject__sprint-title" >
                            Back-end
                        </p>
                    </div>

                    <div className="aboutProject__sprint aboutProject__sprint_type_frontend">
                        <p className="aboutProject__sprint-duration aboutProject__sprint-duration_type_frontend">
                            4 weeks
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