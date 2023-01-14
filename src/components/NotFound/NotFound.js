import './NotFound.css'
import { useNavigate } from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate()

    return (
        <section className='notFound'>
            <h1 className="notFound__error">404</h1>
            <h2 className="notFound__error-text">Страница не найдена</h2>
            <button className="notFound__navigate" onClick={() => navigate(-1)}>Назад</button>
        </section>
    )
}

export default NotFound