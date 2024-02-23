import './Techs.css'
import '../Main/Main.css'

function Techs() {
    return (
        <section className="techs" id='techs'>
            <div className="techs__container main__container">
                <h2 className="techs__title title">Technologies</h2>
                <h3 className="techs__subtitle" >7 technologies</h3>
                <p className="techs__text">During the web development course, we mastered the technologies that we used in our graduation project.</p>
                <div className="techs__technologies-block">

                    <p className="techs__technology">HTML5</p>
                    <p className="techs__technology">CSS3</p>
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