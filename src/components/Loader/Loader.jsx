import { LoadingSpinner } from "../../constants/images"
import "./Loader.style.css"

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={LoadingSpinner} />
        </div>
    )
}

export default Loader