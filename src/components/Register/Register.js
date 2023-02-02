import '../Auth/Auth.css'
import './Register.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'
import { useEffect, useState } from 'react'

function Register({ registrationHandler }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onInputChange (e) {

        if (e.target.name === 'name') {
            setName(e.target.value)
        } 

        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } 
        
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }

    }

    function registrationHandle (e) {
        e.preventDefault()
        registrationHandler(name, email, password)
        clearInputs()
    }

    function clearInputs () {
        setName('')
        setEmail('')
        setPassword('')
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
                        <input className='register__input auth__input' type='text' required placeholder='Имя' name='name' value={name} onChange={onInputChange} ></input>
                        <span className='register__error auth__error'>Что то пошло не так</span>
                    </label>

                    <label className='register__input-label auth__input-label'> E-mail
                        <input className='register__input auth__input' type='email' placeholder='E-mail' required  name='email' value={email} onChange={onInputChange}  ></input>
                        <span className='register__error auth__error'>Что то пошло не так</span>
                    </label>

                    <label className='register__input-label auth__input-label'> Пароль
                        <input className='register__input auth__input' type='password' placeholder='Пароль' required  name='password' value={password} onChange={onInputChange}></input>
                        <span className='register__error auth__error'>Что то пошло не так</span>
                    </label>

                    <button type='submit' className='register__button auth__button' >Зарегистрироваться</button>
                    <p className='register__capion auth__caption'>Уже зарегистрированы?<Link to='/signin' className='register__redirection auth__redirection'>Войти</Link></p>

                </form>
            </div>
        </section>
    )
}

export default Register