import { useEffect, useState } from "react"
import CarDetails from "./CarDetails"
import { useParams } from 'react-router-dom'
import { cars } from "../../services/services"

const CarDetailsContainer = () => {
    const { id } = useParams()
    const [car, setCar] = useState()

    const getCar = async () => {
        const response = (await cars.getCarById(id)).data
        console.log('Res: ', response)
        setCar(response)
    }

    useEffect(() => {
        getCar()
    }, [])

    return <CarDetails car={car} />
}

export default CarDetailsContainer