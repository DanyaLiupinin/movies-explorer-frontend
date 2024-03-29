import { useEffect, useContext } from 'react'
import './Profile.css'
import Header from '../Header/Header'
import { CurrentUserContext } from '../../contexts/currentUserContext'
import FormValidation from '../../hooks/FormValidation'

function Profile(props) {

    const currentUser = useContext(CurrentUserContext);

    const { onInputChange, values, setValues, isValid, error } = FormValidation();

    function saveEditData(e) {
        e.preventDefault()
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
                    <h2 className='profile__regards'>{`Hello, ${currentUser.name}!`}</h2>
                    <form className='profile__inputs' onSubmit={saveEditData}>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>Name</p>
                            <label>
                                <input
                                    className='profile__input'
                                    type='text'
                                    required
                                    placeholder='Name'
                                    name='name'
                                    minLength='2'
                                    maxLength='30'
                                    value={values.name || ''}
                                    onChange={onInputChange}
                                    pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                                ></input>
                            </label>
                            <span className='profile__input-error'>{error.name}</span>
                        </div>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>E-mail</p>
                            <label>
                                <input
                                    className='profile__input'
                                    type='email'
                                    required
                                    placeholder='E-mail'
                                    name='email'
                                    value={values.email || ''}
                                    onChange={onInputChange}
                                ></input>
                            </label>
                            <span className='profile__input-error profile__input-error_type_email'>{error.email}</span>
                        </div>
                        <div className='profile__buttons'>
                            <button className={`profile__button profile__button_type_edit
                            ${!isValid && 'profile__button_disabled'} 
                            ${currentUser.name === values.name && currentUser.email === values.email ?
                                    'profile__button_disabled' : ''}`}
                                type='submit'
                                disabled={!isValid}
                            >Edit</button>
                        </div>
                    </form>
                    <button className='profile__button profile__button_type_signup' type='button' onClick={props.signOut} >Sign out</button>
                </div>
            </section>

        </>

    )
}

export default Profile; 