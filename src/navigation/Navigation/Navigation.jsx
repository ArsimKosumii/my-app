import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeContainer from '../../pages/Home/HomeContainer'
import CarDetailsContainer from '../../pages/CarDetails/CarDetailsContainer'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route index element={<HomeContainer />} />
                <Route path='/car/:id' element={<CarDetailsContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation