import axios from "axios";
import baseURL from "../../api/BaseUrl";

// hàm post cart
export const addCard = (payload) => {
    return axios.post(baseURL + "carts", payload);
  };
  