import './header.scss'
import kasaLightLogo from '../../assets/logo/kasa_logo_light.png'
import { NavLink } from 'react-router'

function Header() {
    return (
    <>
        <img src={kasaLightLogo} alt="Logo Kasa Dark"/>
            <nav className='right'>
                <NavLink
                to="/"
                className={({ isActive }) => isActive ? "active" : ""
                }
                >
                Accueil
                </NavLink>
                <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "active" : ""
                }
                >
                A propos
                </NavLink>
            </nav>
    </>
    )
}

export default Header