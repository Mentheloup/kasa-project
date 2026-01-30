import Banner from '../components/Banner/banner'
import photoBeach from '../assets/pictures/photo_beach.png'

function Home() {
    return (
        <>
            <Banner picture = {photoBeach} text = 'Chez vous, partout et ailleurs'/>
        </>
    )
}

export default Home