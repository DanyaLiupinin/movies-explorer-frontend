import { useEffect, useContext } from 'react'
import './Profile.css'
import Header from '../Header/Header'
import { CurrentUserContext } from '../../contexts/currentUserContext'
import FormValidation from '../../hooks/FormValidation'

function Profile(props) {

    const currentUser = useContext(CurrentUserContext);

    const { onInputChange, values, setValues, isValid } = FormValidation();

    function saveEditData() {
        props.setPreloader(true)

        setTimeout(() => {
            props.updateUserData(values.name, values.email)
            props.setPreloader(false)
        }, 500)
    }

    useEffect(() => {
        setValues({ name: currentUser.name, email: currentUser.email })
    }, [currentUser.email, currentUser.name, setValues])

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
                    <h2 className='profile__regards'>{`Привет, ${currentUser.name}!`}</h2>
                    <form className='profile__inputs'>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>Имя</p>
                            <input className='profile__input' type='text' name='name' placeholder='Имя' maxLength='35' value={values.name} onChange={onInputChange}></input>
                        </div>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>E-mail</p>
                            <input className='profile__input' type='email' name='email' placeholder='E-mail' maxLength='35' value={values.email} onChange={onInputChange}></input>
                        </div>
                        <div className='profile__buttons'>
                            <button className={`profile__button profile__button_type_edit
                            ${!isValid && 'profile__button_disabled'} 
                            ${currentUser.name === values.name && currentUser.email === values.email ? 
                            'profile__button_disabled' : ''}`} 
                            type='button' onClick={saveEditData} disabled={!isValid}>Редактировать</button>
                        </div>
                    </form> 
                    <button className='profile__button profile__button_type_signup' type='button' onClick={props.signOut} >Выйти из аккаунта</button>
                </div>
            </section>

        </>

    )
}

export default Profile; 