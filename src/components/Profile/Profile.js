import { useEffect, useState } from 'react'
import './Profile.css'
import Header from '../Header/Header'

function Profile(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setName(props.currentUser.name)
        setEmail(props.currentUser.email)
    }, [props.currentUser.name, props.currentUser.email])

    function onInputChange (e) {

        if (e.target.name === 'name') {
            setName(e.target.value)
        }

        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }

    }

    return (

        <>
            <Header
                loggedIn={props.loggedIn}
                setLoggedIn={props.setLoggedIn}
                handleOnClickBurger={props.handleOnClickBurger}
                isBurgerOpened={props.isBurgerOpened}
            />

            <section className='profile'>
                <div className='profile__container'>
                    <h2 className='profile__regards'>Привет!</h2>
                    <div className='profile__inputs'>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>Имя</p>
                            <input className='profile__input' type='text' name='name'  placeholder='Имя' maxLength='35' value={name} onChange={onInputChange}></input>
                        </div>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>E-mail</p>
                            <input className='profile__input' type='text' name='email' placeholder='E-mail' maxLength='35' value={email} onChange={onInputChange} ></input>
                        </div>
                    </div>
                    <div className='profile__buttons'>
                        <button className='profile__button profile__button_type_edit' type='button'>Редактировать</button>
                        <button className='profile__button profile__button_type_signup' type='button' onClick={props.signOut}>Выйти из аккаунта</button>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Profile; 