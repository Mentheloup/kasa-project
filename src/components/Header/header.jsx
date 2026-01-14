import './header.scss'
import { Link } from "react-router"
import kasaLightLogo from '../../assets/logo/kasa_logo_light.png'

function Header() {
    return (
        <header>
            <img src={kasaLightLogo} alt="Logo Kasa Dark"/>
            <div className='right'>
                <Link className='navButton' to="/">Accueil</Link>
                <Link className='navButton' to="/about">A propos</Link>
            </div>
        </header>
    )
}

export default Header