import Slider from "react-slick";
import PropTypes from 'prop-types'
import "./CarImagesSlider.style.css"

const CarImagesSlider = ({ carImages }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {carImages.map((image, index) => (
                <>
                    <img className='car_image' key={index} src={image} alt={`Image ${index}`} />
                </>
            ))}
        </Slider>
    )
}

CarImagesSlider.propTypes = {
    carImages: PropTypes.array.isRequired
}

export default CarImagesSlider