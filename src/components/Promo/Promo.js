import './Promo.css'
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Educational project of a student of the Faculty of Web Development.</h1>
                <NavTab />
            </div>
        </section>
    )
}

export default Promo