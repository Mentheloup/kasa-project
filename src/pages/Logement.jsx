import Carroussel from '../components/Carroussel/carroussel'
import annonces from '../datas/annonces.json'

function Logement() {
    return (
        <div>
            <Carroussel picture={annonces[1].cover}/>
      </div>
    )
}

export default Logement