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
            input.setCustomValidity('Only Latin, Cyrillic, spaces and hyphens should be used in the name.')
        } else {
            input.setCustomValidity('')
        }

        if (name === 'email') {
            if (!validate(value)) {
                input.setCustomValidity('Incorrect email data')
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