import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function SavedMovies(props) {

    return (

        <>

        <Header
            loggedIn={props.loggedIn}
            setLoggedIn={props.setLoggedIn}
            handleOnClickBurger={props.handleOnClickBurger}
            isBurgerOpened={props.isBurgerOpened}
        />

        <main className='savedMovies'>

            <SearchForm />

            <MoviesCardList 
            
            />

        </main>

        <Footer />

        </>

    )
}

export default SavedMovies