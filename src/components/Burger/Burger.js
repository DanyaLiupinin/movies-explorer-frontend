import './Burger.css'

function Burger({ handleOnClickBurger, isBurgerOpened }) {
    return (
        <button type="button" className="burger-button" onClick={handleOnClickBurger}></button>
    )
}

export default Burger;