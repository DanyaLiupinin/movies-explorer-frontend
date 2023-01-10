import './Techs.css'

function Techs () {
    return (
        <section className="techs">
            <div className="techs__container">
                <h2 className="techs__title title">Технологии</h2>
                <h3 className="techs__subtitle" >7 технологий</h3>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__technologies-block">

                    <p className="techs__technology">HTML</p>
                    <p className="techs__technology">CSS</p>
                    <p className="techs__technology">JS</p>
                    <p className="techs__technology">React</p>
                    <p className="techs__technology">Git</p>
                    <p className="techs__technology">Express.js</p>
                    <p className="techs__technology">mongoDB</p>

                </div>
            </div>
        </section>
    )
}

export default Techs