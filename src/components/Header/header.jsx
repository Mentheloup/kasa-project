import { Link } from "react-router"

function Header() {
    return (
        <header>
            <h1>Kasa</h1>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </header>
    )
}

export default Header