import './InfoPopup.css'
import closeButton from '../../images/close-button.svg'

function InfoPopup({ isActive, setIsActive, happy, text }) {

    function closePopupHandler () {
        setIsActive(false)
    }

    return (
        <>
            {isActive &&

                <div className="infoPopup">
                    <div className="infoPopup__container">
                        <button className='infoPopup__button' type='button' onClick={closePopupHandler}>
                            <img className='infoPopup__button-image' src={closeButton} alt='закрыть попап'></img>
                        </button>
                        <div className={`infoPopup__image-container 
                        ${happy ?
                                'infoPopup__image-container_type_happy' :
                                'infoPopup__image-container_type_sad'
                            }`}>
                        </div>
                        <p className='infoPopup__text'>
                            {text}
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default InfoPopup