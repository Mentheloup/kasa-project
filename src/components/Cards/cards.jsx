import './cards.scss'
import annonces from '../../datas/annonces.json'

export default function Card () {
    return (
        <div className='cards-wrapper-center'>
            <div className='cards'>
                {annonces.map ((chaqueAnnonce) =>
                <div key={chaqueAnnonce.id} className='card'>
                    <h2>{chaqueAnnonce.title}</h2>
                    <img className='locationPicture' src={chaqueAnnonce.cover} alt="Photo d'une location" />
                </div>
                )}
                
            </div>
        </div>
    )
}