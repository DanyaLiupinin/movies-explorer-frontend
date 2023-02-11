function FormBlock () {

    function blockForm(e) {
        const form = e.target
        const button = form.querySelector('.auth__button')
        const inputs = Array.from(form.querySelectorAll('.auth__input'))
        inputs.forEach((input) => {
            input.setAttribute('readonly', 'readonly')
        })
        button.classList.add('auth__button_disabled')
        button.setAttribute('disabled', true)        
    }

    function unblockForm(e) {
        const form = e.target
        const button = form.querySelector('.auth__button')
        const inputs = Array.from(form.querySelectorAll('.auth__input'))
        inputs.forEach((input) => {
            input.removeAttribute('readonly', 'readonly')
        })
        button.classList.remove('auth__button_disabled')
        button.removeAttribute('disabled', true)  
    }


    return { blockForm, unblockForm } 
}

export default FormBlock