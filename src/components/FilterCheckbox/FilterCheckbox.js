import './FilterCheckbox.css'

function FilterCheckbox() {

    return (
        <div className="checkbox" tabIndex="0" >
            <div className='checkbox__container'>
                <input
                    className="checkbox__checkbox"
                    type="checkbox"
                    id="checkbox"
                />
                <p className="checkbox__name">Короткометражки</p>

                <label htmlFor="checkbox" className="checkbox__label">
                </label>
            </div>
        </div>
    )
}

export default FilterCheckbox