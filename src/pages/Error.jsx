import { Link } from 'react-router'

function Error() {
    return (
        <div>
            <h1>Error 404</h1>
            <p>La page que vous demandez n'existe pas !</p>
            <Link className='navButton' to="/">Retournez sur la page d'accueil</Link>
        </div>
    )
}

export default Error