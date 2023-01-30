import '../Auth/Auth.css'
import './Login.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'
import { useState } from 'react'

function Login({ authorizationHandler }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onInputChange (e) {

        if (e.target.type === 'email') {
            setEmail(e.target.value)
        } 
        
        if (e.target.type === 'password') {
            setPassword(e.target.value)
        }

    }

    function authorizationHandle (e) {

        e.preventDefault()


    }

    return (
        <section className='auth login'>
            <div className='login__container auth__container'>
                <a href="https://yandex.ru" className="login__logo auth__logo">
                    <img className='login__logo-image auth__logo-image' src={logo} alt="логотип" />
                </a>
                <h2 className='login__regards auth__regards'>Рады видеть!</h2>
                <form className='login__form auth__form' onSubmit={authorizationHandle}>

                    <label className='login__input-label auth__input-label'> E-mail
                        <input className='login__input auth__input' type='email' placeholder='E-mail' value={email} onChange={onInputChange} required></input>
                        <span className='login__error auth__error'>Что то пошло не так</span>
                    </label>

                    <label className='login__input-label auth__input-label'> Пароль
                        <input className='login__input auth__input' type='password' placeholder='Пароль' value={[password]} onChange={onInputChange} required></input>
                        <span className='login__error auth__error'>Что то пошло не так</span>
                    </label>

                    <button type='submit' className='login__button auth__button'>Войти</button>
                    <p className='login__capion auth__caption'>Ещё не зарегистрированы?<Link to='/signup' className='login__redirection auth__redirection'>Регистрация</Link></p>

                </form>
            </div>
        </section>
    )
}

export default Login