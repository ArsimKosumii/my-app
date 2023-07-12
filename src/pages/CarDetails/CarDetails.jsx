import PropTypes from 'prop-types'
import "./CarDetails.style.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarImagesSlider from './components/CarImagesSlider/CarImagesSlider';

const CarDetails = ({ car }) => {
    if (!car) {
        return <></>
    }

    const { car_name, car_fuel_level, car_kilometers, car_images } = car


    const renderCarImages = (carImages) => {
        if (carImages.length === 0) {
            return <p>No images found for {car_name}</p>
        }

        return (
            <CarImagesSlider carImages={carImages} />
        )
    }

    return (
        <div className="car_details_container">
            {renderCarImages(car_images)}
            <div className='car_details'>
                <h1>{car_name}</h1>
                <p>{`Total KM: ${car_kilometers}`}</p>
                <p>{`Fuel Left: ${car_fuel_level}L`}</p>
            </div>
        </div>
    )
}

CarDetails.propTypes = {
    car: PropTypes.object.isRequired
}

export default CarDetails