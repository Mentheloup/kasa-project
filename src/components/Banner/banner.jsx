import './banner.scss'

function Banner({text, picture}) {
    return (
        <div className="img-wrapper-center">
            <div className="img-container">
                <h1 className="textBanner">{text}</h1>
                <img className="beach" src={picture} alt="Photo d'un environnement" />
            </div>
        </div>
    )
}

export default Banner