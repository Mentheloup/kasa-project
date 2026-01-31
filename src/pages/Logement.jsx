import Carroussel from '../components/Carroussel/carroussel'
import Rating from '../components/Rating/rating'
import annonces from '../datas/annonces.json'

function Logement() {
    return (
        <div>
            <Carroussel picture={annonces[1].cover}/>
            <Rating rating={annonces[1].rating}/>
      </div>
    )
}

export default Logement