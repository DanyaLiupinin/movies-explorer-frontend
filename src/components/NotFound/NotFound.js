import './NotFound.css'
import { useNavigate } from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate()

    return (
        <section className='notFound'>
            <h1 className="notFound__error">404</h1>
            <h2 className="notFound__error-text">Page not found</h2>
            <div className='notFound__navigation'>
                <button className="notFound__navigate" onClick={() => navigate(-1)}>Go back</button>
            </div>
        </section>
    )
}

export default NotFound