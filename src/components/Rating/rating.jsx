import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './rating.scss'

export default function Rating({rating}) {

    const stars = Array(5).fill(0);

    return (
        <div>
            {stars.map ((eachStar, index) => (
            <FontAwesomeIcon 
                icon={faStar}
                key={'star' + index}
                size='xl'
                className={(rating) > index ? 'starOrange' : 'starGrey'}/>
            ))}
        </div>
    )
}