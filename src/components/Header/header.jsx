import './header.scss'
import { Link } from "react-router"

function Header() {
    return (
        <header>
            <h1>Kasa</h1>
            <div className='right'>
                <Link className='navButton' to="/">Accueil</Link>
                <Link className='navButton' to="/about">A propos</Link>
            </div>
        </header>
    )
}

export default Header