import './InfoPopup.css'
import closeButton from '../../images/close-button.svg'

function InfoPopup({ infoPopup, setInfoPopup }) {

    function closePopupHandler() {
        setInfoPopup({
            isActive: false,
            successful: false,
            info: ''
        })
    }

    return (
        <>
            {infoPopup.isActive &&

                <div className="infoPopup">
                    <div className="infoPopup__container">
                        <button className='infoPopup__button' type='button' onClick={closePopupHandler}>
                            <img className='infoPopup__button-image' src={closeButton} alt='закрыть попап'></img>
                        </button>
                        <div className={`infoPopup__image-container 
                        ${infoPopup.successful ?
                                'infoPopup__image-container_type_happy' :
                                'infoPopup__image-container_type_sad'
                            }`}>
                        </div>
                        <p className='infoPopup__text'>
                            {infoPopup.info}
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default InfoPopup