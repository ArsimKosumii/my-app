import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import Loader from "../../components/Loader/Loader"

const Home = ({ carArray }) => {
    if (!carArray) {
        return <Loader />
    }

    return (
        <>
            <h1>Home</h1>
            <div className="links">
                {carArray.map((item, index) => {
                    return <>
                        <Link key={index} to={`car/${item.car_id}`}>{item.car_name}</Link>
                        <br />
                    </>
                })}
            </div>
        </>
    )
}

Home.propTypes = {
    carArray: PropTypes.array.isRequired
}

export default Home