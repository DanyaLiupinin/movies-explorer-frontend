import './FilterCheckbox.css'

function FilterCheckbox() {

    return (
        <div className="checkbox">
            <label className="checkbox__label">
                <input
                    className="checkbox__checkbox"
                    type="checkbox"
                    id="checkbox"
                />
                <p className="checkbox__name">Короткометражки</p>
            </label>
        </div>
    )
}

export default FilterCheckbox