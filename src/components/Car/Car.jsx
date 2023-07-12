import PropTypes from 'prop-types'
import "./Car.style.css"
import { Link } from 'react-router-dom'

const Car = ({ car }) => {

    const renderCarImage = (carImages) => {
        if (carImages.length === 0) {
            return <Link to={`car/${car.id}`}>Check details</Link>
        }

        return <Link to={`car/${car.id}`}>
            <img className='car_main_image' src={carImages[0]} />
        </Link>
    }

    return (
        <div className="car" to={''}>
            {renderCarImage(car.car_images)}
            <h1>{car.car_name}</h1>
        </div>
    )
}

Car.propTypes = {
    car: PropTypes.object.isRequired
}

export default Car