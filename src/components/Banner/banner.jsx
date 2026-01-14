import photoBeach from '../../assets/pictures/photo_beach.png'
import './banner.scss'

function Banner() {
    return (
        <div className="img-wrapper-center">
            <div className="img-container">
                <h1 className="textBanner">Chez vous, partout et ailleurs</h1>
                <img className="beach" src={photoBeach} alt="Photo d'une plage rocailleuse" />
            </div>
        </div>
    )
}

export default Banner