import PropTypes from 'prop-types'
import Loader from "../../components/Loader/Loader"
import Car from "../../components/Car/Car"
import "./Home.style.css"

const Home = ({ carArray }) => {
    if (!carArray) {
        return <Loader />
    }

    return (
        <div className="car-links">
            {carArray.map((item, index) => {
                return <Car key={index} car={item} />
            })}
        </div>
    )
}

Home.propTypes = {
    carArray: PropTypes.array.isRequired
}

export default Home