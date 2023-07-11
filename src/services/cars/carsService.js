import axios from "axios";
import { API_URL } from "../../constants/global";

const getCars = async () => {
  return await axios.get(`${API_URL}/cars`);
};

export { getCars };
