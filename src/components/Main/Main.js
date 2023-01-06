import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main({ loggedIn, setLoggedIn, handleOnClickBurger, isBurgerOpened }) {


    return (
        <>
            <Header
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleOnClickBurger={handleOnClickBurger}
                isBurgerOpened={isBurgerOpened} />

            <main className="main">

                <Promo />

            </main>


            <Footer />
        </>
    )
}

export default Main;

/* 
<main className="main">
                
                <Promo />

                <AboutProject />

                <Techs />

                <AboutMe />

                <Portfolio />

            </main>
*/