import { useState } from "react"
import { validate } from 'email-validator';

function FormValidation() {

    const [values, setValues] = useState({})
    const [error, setError] = useState({})
    const [isValid, setIsValid] = useState(false)

    const onInputChange = (e) => {

        const input = e.target
        const { value, name } = input;

        if (name === 'name' && input.validity.patternMismatch) {
            input.setCustomValidity('В имени должны использоваться только латиница, кириллица, пробелы и дефисы.')
        } else {
            input.setCustomValidity('')
        }

        if (name === 'email') {
            if (!validate(value)) {
                input.setCustomValidity('Формат почты неверный')
            } else {
                input.setCustomValidity('')
            }
        }

        setValues({ ...values, [name]: value })
        setError({ ...error, [name]: input.validationMessage });
        setIsValid(input.closest('form').checkValidity())

    }

    return { onInputChange, values, error, isValid, setValues }

}

export default FormValidation