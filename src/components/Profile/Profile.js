import { useEffect, useState, useContext } from 'react'
import './Profile.css'
import Header from '../Header/Header'
import { CurrentUserContext } from '../../contexts/currentUserContext'

function Profile(props) {

    const currentUser = useContext(CurrentUserContext);


    const [name, setName] = useState('Имя')
    const [email, setEmail] = useState('Email')  // добавить валидацию


    function onInputChange(e) {

        if (e.target.name === 'name') {
            setName(e.target.value)
        }

        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }

    }

    function saveEditData() {
        props.updateUserData(name, email)
    }

    useEffect(() => {

        setName(currentUser.name)
        setEmail(currentUser.email)

    }, [currentUser])

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
                            <input className='profile__input' type='text' name='name' placeholder='Имя' maxLength='35' value={currentUser.name} onChange={onInputChange}></input>
                        </div>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>E-mail</p>
                            <input className='profile__input' type='email' name='email' placeholder='E-mail' maxLength='35' value={currentUser.email} onChange={onInputChange}></input>
                        </div>
                    </div>
                    <div className='profile__buttons'>
                        <button className='profile__button profile__button_type_edit' type='button' onClick={saveEditData}>Редактировать</button>
                        <button className='profile__button profile__button_type_signup' type='button' onClick={props.signOut}>Выйти из аккаунта</button>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Profile; 