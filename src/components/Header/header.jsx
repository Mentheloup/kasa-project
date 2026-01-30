import './header.scss'
import kasaLightLogo from '../../assets/logo/kasa_logo_light.png'
import { NavLink } from 'react-router'

function Header() {
    return (
    <header>
        <div className="header-inner">
            <img src={kasaLightLogo} alt="Logo Kasa Dark"/>
            <nav className='right'>
                <NavLink
                to="/"
                className="navButton"
                >
                Accueil
                </NavLink>
                <NavLink
                to="/about"
                className="navButton"
                >
                A propos
                </NavLink>
            </nav>
        </div>
    </header>
    )
}

export default Header