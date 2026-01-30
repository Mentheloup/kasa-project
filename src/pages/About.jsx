import Banner from '../components/Banner/banner'
import Slider from '../components/Slider/slider'
import photoMountain from '../assets/pictures/photo_mountain.png'

function About() {
    return (
        <>
            <Banner picture = {photoMountain} text = ''/>
            <Slider/>
        </>
    )
}

export default About