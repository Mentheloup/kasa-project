import './cards.scss'
import annonces from '../../datas/annonces.json'
import { NavLink } from 'react-router'

export default function Card () {
    return (
        <div className='cards-wrapper-center'>
            <div className='cards'>
                {annonces.map ((chaqueAnnonce) =>
                <div key={chaqueAnnonce.id} className='card'>
                    <h2>{chaqueAnnonce.title}</h2>
                    <NavLink to="/logement/">
                        <img className='locationPicture' src={chaqueAnnonce.cover} alt="Photo d'une location" />
                    </NavLink>
                </div>
                )}
                
            </div>
        </div>
    )
}