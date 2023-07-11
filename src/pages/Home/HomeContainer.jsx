import { useEffect, useState } from "react"
import Home from "./Home"
import { cars } from "../../services/services"
import Loader from "../../components/Loader/Loader"

const HomeContainer = () => {
    const [carArray, setCarArray] = useState()
    const [loading, setLoading] = useState(false)

    const getAllCars = async () => {
        setLoading(true)

        try {
            const response = (await cars.getCars()).data;
            setCarArray(response)
        } catch (error) {
            console.log('Err: ', error)
        }

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        getAllCars()
    }, [])

    return (
        loading || !carArray ? <Loader /> :
            <Home carArray={carArray} />
    )
}

export default HomeContainer