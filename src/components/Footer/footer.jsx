import './footer.scss'
import kasaDarkLogo from '../../assets/logo/kasa_logo_dark.png'

function Footer() {
    return (
        <div className="footer">
            <img src={kasaDarkLogo} alt="Logo Kasa Dark"/> 
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer