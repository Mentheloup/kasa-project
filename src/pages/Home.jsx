import Banner from '../components/Banner/banner'
import Cards from '../components/Cards/cards'
import photoBeach from '../assets/pictures/photo_beach.png'

function Home() {
    return (
        <>
            <Banner picture = {photoBeach} text = 'Chez vous, partout et ailleurs'/>
            <Cards/>
        </>
    )
}

export default Home