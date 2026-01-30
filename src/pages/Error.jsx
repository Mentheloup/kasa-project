import { Link } from 'react-router'
import '../components/Error/Error.scss'

function Error() {
    return (
        <div className='errorPage'>
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link className='backButton' to="/">Retournez sur la page d'accueil</Link>
        </div>
    )
}

export default Error