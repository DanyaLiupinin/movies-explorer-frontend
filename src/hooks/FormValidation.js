import { useState } from "react"

function FormValidation() {

    const [values, setValues] = useState({})
    const [error, setError] = useState({})
    const [isValid, setIsValid] = useState(false)

    const onInputChange = (e) => {

        const input = e.target
        const { value, name } = input;

        setValues({ ...values, [name]: value })
        setError({ ...error, [name]: input.validationMessage });
        setIsValid(input.closest('form').checkValidity())

        /*
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } 
        
        if (e.target.type === 'password') {
            setPassword(e.target.value)
        } 
        */

    }



    return { onInputChange, values, error, isValid }

}

export default FormValidation