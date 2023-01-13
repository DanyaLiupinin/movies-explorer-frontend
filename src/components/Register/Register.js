import './Register.css'
import logo from '../../images/logo.svg'

function Register() {

    return (
        <section className='register auth'>
            <div className='register__container auth__container'>
                <a href="https://yandex.ru" className="register__logo auth__logo" targer="_blank">
                    <img className='register__logo-image auth__logo-image' src={logo} alt="логотип" />
                </a>
                <h2 className='register__regards auth__regards'>Добро пожаловать!</h2>
                <form className='register__form auth__form' action='#'>

                    <label className='register__input-label auth__input-label'> Имя
                        <input className='register__input auth__input' type='text' required placeholder='Имя' ></input>
                    </label>

                    <label className='register__input-label auth__input-label'> E-mail
                        <input className='register__input auth__input' type='email' placeholder='E-mail' required></input>
                    </label>

                    <label className='register__input-label auth__input-label'> Пароль
                    <input className='register__input auth__input' type='password' placeholder='Пароль' required></input>
                    </label>

                    <button type='submit' className='register__button auth__button' >Зарегистрироваться</button>
                    <p className='register__capion auth__caption'>Уже зарегистрированы? Войти</p>

                </form>
            </div>
        </section>
    )
}

export default Register