import './slider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import valeurs from '../../datas/valeurs.json'

function Slider () {
    return (
        <div className='slider'>
            {valeurs.map ((chaqueValeur) =>
                <div key={chaqueValeur.id}>
                    <div className="sliderBox">
                        <h1>{chaqueValeur.name}</h1>
                        <FontAwesomeIcon icon={faAngleUp} size='xl' />
                    </div>
                    <p>{chaqueValeur.text}</p>
                </div>
            )}
            
        </div>
    )
}

export default Slider