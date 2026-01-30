import './slider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import valeurs from '../../datas/valeurs.json'
import { useState } from 'react'

function Slider () {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='slider'>
            {valeurs.map ((chaqueValeur) =>
                <div key={chaqueValeur.id}>
                    <div className="sliderBox">
                        <h1>{chaqueValeur.name}</h1>
                        <FontAwesomeIcon icon={faAngleUp} className='arrow' size='xl' onClick={() => setIsOpen(true)} />
                    </div>
                    <p className='valueTxt'>{chaqueValeur.text}</p>
                </div>
            )}
            
        </div>
    )
}

export default Slider