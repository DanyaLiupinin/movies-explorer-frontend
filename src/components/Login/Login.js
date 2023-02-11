import '../Auth/Auth.css'
import './Login.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import FormValidation from '../../hooks/FormValidation.js'
import FormBlock from '../../hooks/FormBlock'

function Login({ authorizationHandler, setPreloader }) {

    const { onInputChange, values, error, isValid } = FormValidation()
    const { blockForm, unblockForm } = FormBlock()

    function authorizationHandle(e) {
        e.preventDefault()
        setPreloader(true)
        blockForm(e)

        setTimeout(() => {
            authorizationHandler(values.email, values.password)
            unblockForm(e)
            setPreloader(false)
        }, 1000)
    }

    return (
        <section className='auth login'>
            <div className='login__container auth__container'>
                <Link to='/' className="login__logo auth__logo">
                    <img className='login__logo-image auth__logo-image' src={logo} alt="логотип" />
                </Link>
                <h2 className='login__regards auth__regards'>Рады видеть!</h2>
                <form className='login__form auth__form' onSubmit={authorizationHandle} noValidate >

                    <label className='login__input-label auth__input-label'> E-mail
                        <input
                            className='login__input auth__input'
                            type='email'
                            placeholder='E-mail'
                            value={values.email || ''}
                            onChange={onInputChange}
                            required
                            name='email'
                        ></input>
                        <span className='login__error auth__error'>{error.email}</span>
                    </label>

                    <label className='login__input-label auth__input-label'> Пароль
                        <input
                            className='login__input auth__input'
                            type='password'
                            placeholder='Пароль'
                            value={values.password || ''}
                            onChange={onInputChange}
                            required
                            name='password'
                        ></input>
                        <span className='login__error auth__error'>{error.password}</span>
                    </label>

                    <button type='submit' className={`login__button auth__button 
                    ${!isValid ? 'auth__button_disabled' : ''}`} disabled={!isValid}>Войти</button>
                    <p className='login__capion auth__caption'>Ещё не зарегистрированы?<Link to='/signup' className='login__redirection auth__redirection'>Регистрация</Link></p>

                </form>
            </div>
        </section>
    )
}

export default Login