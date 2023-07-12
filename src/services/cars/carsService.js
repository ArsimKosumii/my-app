import axios from "axios";
import { API_URL } from "../../constants/global";

const getCars = async () => {
  return await axios.get(`${API_URL}/cars`);
};

const getCarById = async (carId) => {
  return await axios.get(`${API_URL}/cars/${carId}`);
};

export { getCars, getCarById };
