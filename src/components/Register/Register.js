import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import './Register.css'
import logo from '../../images/logo.svg'
import FormValidation from '../../hooks/FormValidation.js'

function Register({ registrationHandler }) {

    const { onInputChange, values, error, isValid, setValues } = FormValidation()

    function registrationHandle(e) {
        e.preventDefault()
        registrationHandler(values.name, values.email, values.password)
        setValues({})
    }

    return (
        <section className='register auth'>
            <div className='register__container auth__container'>
                <a href="https://yandex.ru" className="register__logo auth__logo">
                    <img className='register__logo-image auth__logo-image' src={logo} alt="логотип" />
                </a>
                <h2 className='register__regards auth__regards'>Добро пожаловать!</h2>
                <form className='register__form auth__form' onSubmit={registrationHandle} >

                    <label className='register__input-label auth__input-label'> Имя
                        <input
                            className='register__input auth__input'
                            type='text'
                            required
                            placeholder='Имя'
                            name='name'
                            value={values.name || ''}
                            onChange={onInputChange}
                            minLength='2'
                            maxLength='30'
                            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                        ></input>
                        <span className='register__error auth__error'>{error.name}</span>
                    </label>

                    <label className='register__input-label auth__input-label'> E-mail
                        <input
                            className='register__input auth__input'
                            type='email'
                            placeholder='E-mail'
                            required
                            name='email'
                            value={values.email || ''}
                            onChange={onInputChange}
                        ></input>
                        <span className='register__error auth__error'>{error.email}</span>
                    </label>

                    <label className='register__input-label auth__input-label'> Пароль
                        <input
                            className='register__input auth__input'
                            type='password'
                            placeholder='Пароль'
                            required
                            name='password'
                            value={values.password || ''}
                            onChange={onInputChange}
                        ></input>
                        <span className='register__error auth__error'>{error.password}</span>
                    </label>

                    <button type='submit' className={`register__button auth__button ${!isValid && 'auth__button_disabled'}`} disabled={!isValid} >Зарегистрироваться</button>
                    <p className='register__capion auth__caption'>Уже зарегистрированы?<Link to='/signin' className='register__redirection auth__redirection'>Войти</Link></p>

                </form>
            </div>
        </section>
    )
}

export default Register