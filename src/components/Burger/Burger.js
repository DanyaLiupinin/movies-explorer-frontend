import './Burger.css'

function Burger({ handleOnClickBurger, isBurgerOpened }) {
    return (
        <button type="button" className={`burger-button ${isBurgerOpened ? 'burger-button_opened' : 'burger-button_closed'}`} onClick={handleOnClickBurger}></button>
    )
}

export default Burger;